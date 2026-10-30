"""Draw the article's overview of command, file and HTTP request paths.

uv run --with fonttools python scripts/create-runtime-overview.py
"""
from html import escape
from pathlib import Path

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parents[1]
FONT = TTFont(ROOT / "scripts/assets/microvm-figures/SpaceGrotesk-Regular.ttf")
GLYPHS, CMAP = FONT.getGlyphSet(), FONT.getBestCmap()
INK, PAPER, RULE = "#000000", "#fffde7", "#bdbbad"
parts = [f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760" role="img" aria-labelledby="title desc">
<title id="title">Autohive agent runtime</title>
<desc id="desc">Commands go from Autohive's execution engine through the root supervisor to an unprivileged runner. The runner accesses files through bind mounts and rclone's FUSE mount, backed by Autohive's WebDAV endpoint. Its HTTP and HTTPS requests are redirected by eBPF to a proxy in the same Go supervisor process, then to Autohive's credential gateway, which handles connection credentials and forwards requests to the public internet. Arrows show request direction; responses return along the same paths.</desc>
<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M1 1 L9 5 L1 9" fill="none" stroke="context-stroke" stroke-width="1.4"/></marker></defs>
<rect width="1200" height="760" fill="{PAPER}"/>
''']


def text(x, y, value, size=22, colour=INK):
    scale = size / FONT["head"].unitsPerEm
    names = [CMAP.get(ord(c), ".notdef") for c in value]
    width = sum(FONT["hmtx"][n][0] for n in names) * scale
    assert x - width / 2 >= 0 and x + width / 2 <= 1200, value
    parts.append(f'<g fill="{colour}" aria-label="{escape(value)}" transform="translate({x-width/2} {y}) scale({scale} {-scale})">')
    offset = 0
    for name in names:
        pen = SVGPathPen(GLYPHS)
        GLYPHS[name].draw(pen)
        parts.append(f'<path transform="translate({offset} 0)" d="{pen.getCommands()}"/>')
        offset += FONT["hmtx"][name][0]
    parts.append("</g>")


def rect(x, y, w, h, colour=INK):
    parts.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="none" stroke="{colour}" stroke-width="1.7"/>')


def arrow(d, colour=INK):
    parts.append(f'<path d="{d}" fill="none" stroke="{colour}" stroke-width="1.7" marker-end="url(#arrow)"/>')


def box(x, y, w, title, subtitle):
    rect(x, y, w, 84)
    text(x+w/2, y+35, title, 24)
    text(x+w/2, y+64, subtitle, 19)


rect(25, 75, 300, 530, RULE)
text(175, 51, "Autohive", 29)
rect(380, 75, 795, 530, RULE)
text(777, 51, "AWS Lambda MicroVM", 29)

box(50, 120, 250, "Execution engine", "Dispatches commands")
box(410, 120, 270, "Go supervisor", "Root")
arrow("M300 162 H410")
arrow("M680 162 H850")
text(765, 144, "Commands", 19)

# One runner, with three distinct request paths rather than a serial pipeline.
rect(850, 120, 295, 440)
text(997, 160, "Command runner", 25)
text(997, 191, "Unprivileged · UID 10001", 19)
text(997, 246, "Shell · Python · browser", 20)

box(50, 298, 250, "WebDAV", "Content and agent files")
box(410, 298, 270, "rclone + FUSE", "Root")
arrow("M410 340 H300")
arrow("M850 340 H680")
text(765, 298, "File access", 18)
text(765, 322, "via bind mounts", 18)
text(997, 348, "File operations", 23)
arrow("M545 204 V298")
text(632, 257, "Mounts", 19)

box(50, 476, 250, "Credential gateway", "Adds provider credentials")
box(410, 476, 270, "HTTP proxy", "Same Go supervisor")
arrow("M410 518 H300")
arrow("M850 518 H680")
text(765, 499, "eBPF redirect", 19)
text(997, 511, "HTTP(S) requests", 23)
text(997, 540, "TCP 80 / 443", 19)

arrow("M175 560 V655")
rect(50, 655, 250, 84)
text(175, 706, "Public internet", 24)

parts.append("</svg>")
(ROOT / "public/blog/lambda-microvm-runtime/runtime-overview.svg").write_text("\n".join(parts) + "\n")
