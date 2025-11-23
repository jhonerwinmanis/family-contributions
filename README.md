npm run deploy
git add dist -f
git commit -m "Deploy"
git subtree push --prefix dist origin gh-pages