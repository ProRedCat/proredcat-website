import { build } from 'velite'

/** @type {import('next').NextConfig} */
export default {
    webpack: (config, { dev }) => {
        config.plugins.push(new VeliteWebpackPlugin())

        // Webpack's filesystem cache can't statically analyze velite's dynamic import,
        // which produces noisy warnings. Use an in-memory cache during dev to silence it.
        if (dev && config.cache?.type === 'filesystem') {
            config.cache = { type: 'memory' }
        }

        return config
    }
}

class VeliteWebpackPlugin {
    static started = false
    apply(/** @type {import('webpack').Compiler} */ compiler) {
        compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
            if (VeliteWebpackPlugin.started) return
            VeliteWebpackPlugin.started = true
            const dev = compiler.options.mode === 'development'
            await build({ watch: dev, clean: !dev })
        })
    }
}
