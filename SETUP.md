# brew

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# add brew to zsh

1. cd /opt/homebrew/bin/
2. PATH=$PATH:/opt/homebrew/bin
3. cd
4. touch .zshrc
5. echo export PATH=$PATH:/opt/homebrew/bin >> .zshrc

# others

1. brew install git
