dev:
	yarn webpack --config bundle/webpack.config.dev.js

prod:
	yarn webpack --config bundle/webpack.config.prod.js

dev-watch:
	webpack --watch --config bundle/webpack.config.dev.js

serve-dev:
	yarn webpack-dev-server --config bundle/webpack.config.dev.js --open && $(MAKE) dev-wath

serve-prod:
	yarn webpack-dev-server --config bundle/webpack.config.prod.js --open