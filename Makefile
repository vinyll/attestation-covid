.ONESHELL:

deploy:
	ssh attestation.connect.cafe '\
		cd attestation-covid &&\
		git reset --hard &&\
		export PATH=~/.nvm/versions/node/v13.3.0/bin:$(PATH) &&\
		npm run build &&\
		echo "completed" \
	'
