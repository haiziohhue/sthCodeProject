# spawn
gpg --full-generate-key
# export public key
gpg --armor --export your_email@example.com
# git commit apply
git config --global user.signingkey your_gpg_key_id
git config --global commit.gpgsign true