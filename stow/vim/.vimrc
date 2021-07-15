" VIM Configuration
" Adapted from https://github.com/vjousse/vim-for-humans/blob/master/en/syntaxhighlight/vimrc


" -- Install vim.plug
if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/2f5f74e5e67f657e9fdac54891a76721bcd3ead3/plug.vim
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

" -- Install plugins
call plug#begin('~/.vim/plugged')
Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }
Plug 'junegunn/fzf.vim'
Plug 'itchyny/lightline.vim'
Plug 'airblade/vim-gitgutter'
Plug 'altercation/vim-colors-solarized'
Plug 'tpope/vim-sensible'
call plug#end()

" -- Cancel compatibility with Vi
set nocompatible

" -- Display
set title                 " Update the title of your window or your terminal
set relativenumber        " Display relative line numbers
set number                " Display line numbers
set ruler                 " Display cursor position
set nowrap                " Do not wrap lines when they are too long
set scrolloff=3           " Display at least 3 lines around you cursor (for scrolling)
set guioptions=T          " Enable the toolbar

" -- Tabs
set tabstop=4
set shiftwidth=4
set expandtab

" -- Search
set ignorecase            " Ignore case when searching
set smartcase             " If there is an uppercase in your search term search case sensitive again
set incsearch             " Highlight search results when typing
set hlsearch              " Highlight search results

" -- Beep
set noerrorbells          " Prevent Vim from beeping

" -- Backspace behaves as expected
set backspace=indent,eol,start

" -- Hide buffer (file) instead of abandoning when switching to another buffer
set hidden

" -- Enable syntax highlighting
syntax enable

" -- Enable file specific behavior like syntax highlighting and indentation
filetype on
filetype plugin on
filetype indent on

" -- Use the dark version of Solarized
set background=dark
colorscheme solarized

" -- Change the font
set guifont=DejaVu\ Sans\ Mono\ 10
set antialias

" -- Set vim to use the system's clipboard so we can yank-paste outside of vim
if system('uname -s') == "Darwin\n"
  set clipboard=unnamed "OSX
else
  set clipboard=unnamedplus "Linux
endif

" -- Rebind navigation to a wasd like ijkl
noremap j h
noremap i k
noremap k j
noremap h i
noremap <space> i

" -- Do not yank when pasting
vnoremap p "_dP

" -- Activate lightline
set laststatus=2

" -- Add shortcut for fzf :Files
:nmap <C-S-n> :Files<CR>
