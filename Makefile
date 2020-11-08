deploy:
	git checkout gh-pages
	npm run build
	cp -R dist/* docs/
	git add docs
	git commit docs -m "Building for Gh Pages"
	git push -f origin gh-pages
	rm -fr docs/
	git checkout -
