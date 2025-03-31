const _0x44ac96 = _0x5f3e;
(function (_0x3c549d, _0x20c0a1) {
    const _0x4812e2 = _0x5f3e,
        _0x107435 = _0x3c549d();
    while (!![]) {
        try {
            const _0x4c2fe1 = parseInt(_0x4812e2(0x1e0)) / 0x1 * (parseInt(_0x4812e2(0x1c2)) / 0x2) + -parseInt(_0x4812e2(0x1d2)) / 0x3 + -parseInt(_0x4812e2(0x1da)) / 0x4 + -parseInt(_0x4812e2(0x1a2)) / 0x5 + parseInt(_0x4812e2(0x1ba)) / 0x6 * (-parseInt(_0x4812e2(0x19b)) / 0x7) + parseInt(_0x4812e2(0x19a)) / 0x8 * (-parseInt(_0x4812e2(0x1e2)) / 0x9) + parseInt(_0x4812e2(0x1e4)) / 0xa;
            if (_0x4c2fe1 === _0x20c0a1) break;
            else _0x107435['push'](_0x107435['shift']());
        } catch (_0x392fb3) {
            _0x107435['push'](_0x107435['shift']());
        }
    }
}(_0x6d8f, 0xf01a6));

async function hackMUITextarea(_0x35af0b, _0x216fa3) {
    const _0x4ce465 = _0x5f3e,
        _0x1ae6e8 = _0x35af0b['querySelector'](_0x4ce465(0x1df));
    if (!_0x1ae6e8) return ![];
    try {
        const _0x3d0957 = Object[_0x4ce465(0x1e7)](_0x1ae6e8)[_0x4ce465(0x1e3)](_0x38d4c0 => _0x38d4c0['startsWith'](_0x4ce465(0x1e9)) || _0x38d4c0[_0x4ce465(0x1d7)](_0x4ce465(0x1c5)) || _0x38d4c0[_0x4ce465(0x1d7)](_0x4ce465(0x1dd)));
        if (_0x3d0957[_0x4ce465(0x1b3)] > 0x0) for (const _0x5f518a of _0x3d0957) {
            const _0x581521 = _0x1ae6e8[_0x5f518a];
            if (_0x581521 && typeof _0x581521[_0x4ce465(0x1b1)] === 'function') {
                console[_0x4ce465(0x1c8)]('[DEBUG]\x20Manipulador\x20onChange\x20encontrado\x20em:', _0x5f518a);
                const _0x5f4ee5 = {
                    'target': {
                        'value': _0x216fa3
                    },
                    'currentTarget': {
                        'value': _0x216fa3
                    },
                    'preventDefault': () => {},
                    'stopPropagation': () => {}
                };
                return _0x581521[_0x4ce465(0x1b1)](_0x5f4ee5), setTimeout(() => {
                    const _0xa0830e = _0x4ce465;
                    _0x1ae6e8[_0xa0830e(0x1cb)] === _0x216fa3 ? console['log'](_0xa0830e(0x1eb)) : console[_0xa0830e(0x1c8)](_0xa0830e(0x1c7));
                }, 0x64), !![];
            }
        }
    } catch (_0x358098) {
        console['error'](_0x4ce465(0x1f1), _0x358098);
    }
    try {
        _0x1ae6e8['value'] = '', _0x1ae6e8['dispatchEvent'](new Event(_0x4ce465(0x1b8), {
            'bubbles': !![]
        })), setTimeout(() => {
            const _0x426219 = _0x4ce465;
            _0x1ae6e8[_0x426219(0x1cb)] = _0x216fa3, _0x1ae6e8[_0x426219(0x1bd)](new Event(_0x426219(0x1b8), {
                'bubbles': !![]
            })), _0x1ae6e8[_0x426219(0x1bd)](new Event(_0x426219(0x1ed), {
                'bubbles': !![]
            })), _0x1ae6e8['dispatchEvent'](new Event(_0x426219(0x1ce), {
                'bubbles': !![]
            })), console[_0x426219(0x1c8)](_0x426219(0x1ec), _0x1ae6e8[_0x426219(0x1cb)]);
        }, 0x32);
    } catch (_0x378697) {
        console['error'](_0x4ce465(0x1f1), _0x378697);
    }
    return setTimeout(() => {
        const _0xbade22 = _0x4ce465;
        if (_0x1ae6e8[_0xbade22(0x1cb)] !== _0x216fa3) try {
            _0x1ae6e8[_0xbade22(0x1b6)](), _0x1ae6e8[_0xbade22(0x1c4)](), document[_0xbade22(0x19d)](_0xbade22(0x1dc), ![]), document['execCommand'](_0xbade22(0x199), ![], _0x216fa3), console[_0xbade22(0x1c8)]('[DEBUG]\x20Valor\x20apÃ³s\x20execCommand:', _0x1ae6e8[_0xbade22(0x1cb)]);
        } catch (_0x51530c) {
            console[_0xbade22(0x1b4)](_0xbade22(0x1b7), _0x51530c);
        }
    }, 0x96), setTimeout(() => {
        const _0x313e83 = _0x4ce465;
        if (_0x1ae6e8['value'] !== _0x216fa3) {
            console[_0x313e83(0x1c8)](_0x313e83(0x1e6));
            try {
                _0x1ae6e8[_0x313e83(0x1b6)](), _0x1ae6e8[_0x313e83(0x1cb)] = '';
                const _0x3c2c90 = new InputEvent(_0x313e83(0x1b8), {
                    'bubbles': !![],
                    'data': _0x216fa3,
                    'inputType': 'insertText'
                });
                _0x1ae6e8[_0x313e83(0x1cb)] = _0x216fa3, _0x1ae6e8['dispatchEvent'](_0x3c2c90), console[_0x313e83(0x1c8)](_0x313e83(0x1ac), _0x1ae6e8[_0x313e83(0x1cb)]);
            } catch (_0xe34596) {
                console[_0x313e83(0x1b4)](_0x313e83(0x1a0), _0xe34596);
            }
        }
    }, 0xfa), setTimeout(() => {
        const _0x163688 = _0x4ce465;
        console[_0x163688(0x1c8)](_0x163688(0x1bf), _0x1ae6e8['value']), _0x1ae6e8[_0x163688(0x1cb)] === _0x216fa3 ? console[_0x163688(0x1c8)](_0x163688(0x1d6)) : console[_0x163688(0x1c8)](_0x163688(0x1bc), _0x1ae6e8[_0x163688(0x1cb)]);
    }, 0x1f4), !![];
}

async function pasteContent() {
    const content = prompt("Cole o conteúdo que deseja inserir:");
    if (content) {
        const textareas = document.querySelectorAll('textarea');
        if (textareas.length > 0) {
            const lastTextarea = textareas[textareas.length - 1];
            const success = await hackMUITextarea(lastTextarea.parentElement, content);
            if (success) {
                alert("Conteúdo colado com sucesso!");
            } else {
                alert("Falha ao colar o conteúdo.");
            }
        } else {
            alert("Nenhum textarea encontrado na página.");
        }
    }
}

function _0x6d8f() {
    const _0x2f00ca = ['TITULO:', '26GvEwCd', 'trim', 'select', '__reactEventHandlers$', 'content', '[ERROR]\x20acho\x20que\x20deu\x20merda', 'log', 'json', '[ERROR]\x20Falha\x20ao\x20obter\x20resposta\x20da\x20IA:', 'value', 'parts', 'textContent', 'blur', 'pathname', 'p.MuiTypography-root.MuiTypography-body1.css-m576f2', 'Hello\x20World!', '3081828SySICd', 'location', 'innerHTML', 'TEXTO:', '[SUCCESS]\x20Texto\x20inserido\x20com\x20sucesso!', 'startsWith', 'RedaÃ§Ã£o', '[DEBUG]\x20ID\x20DA\x20REDAÃ‡ÃƒO:\x20', '5105564UMIGCD', '[INFO]\x20Gerando\x20redaÃ§Ã£o\x20com\x20IA...', 'delete', '__reactFiber$', 'split', 'textarea:not([aria-hidden=\x22true\x22])', '51118eRwDWb', 'stringify', '9LUshQZ', 'filter', '54823540jCMkXG', 'querySelectorAll', '[DEBUG]\x20Tentando\x20mÃ©todo\x20InputEvent', 'keys', 'Resposta\x20invÃ¡lida\x20da\x20API\x20do\x20Gemini', '__reactProps$', 'application/json', '[SUCCESS]\x20tudo\x20norma', '[DEBUG]', 'change', '[SUCESSO]\x20RedaÃ§Ã£o\x20inserida\x20com\x20sucesso!', ':generateContent?key=', '.ql-align-justify', '[ERROR]', 'insertText', '6866416OZJYFa', '840875xmFsoq', '[INFO]\x20Humanizando\x20redaÃ§Ã£o...', 'execCommand', 'Formato\x20de\x20resposta\x20da\x20IA\x20invÃ¡lido.\x20A\x20resposta\x20nÃ£o\x20contÃ©m\x20\x27TITULO:\x27\x20ou\x20\x27TEXTO:\x27.', '.css-1pvvm3t', '[ERROR]\x20Erro\x20no\x20mÃ©todo\x20InputEvent:', '[DEBUG]\x20Iniciando\x20inserÃ§Ã£o\x20de\x20tÃ­tulo\x20e\x20texto', '4601660mCLVkA', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reescreva\x20o\x20seguinte\x20texto\x20acadÃªmico\x20em\x20portuguÃªs\x20para\x20que\x20pareÃ§a\x20escrito\x20por\x20um\x20estudante\x20humano,\x20nÃ£o\x20por\x20IA.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Regras\x20importantes:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201.\x20Mantenha\x20o\x20conteÃºdo\x20e\x20os\x20argumentos\x20principais\x20intactos\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x202.\x20Adicione\x20pequenas\x20imperfeiÃ§Ãµes\x20naturais\x20como\x20ocasionais\x20repetiÃ§Ãµes\x20de\x20palavras\x20ou\x20construÃ§Ãµes\x20frasais\x20variadas\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x203.\x20Use\x20linguagem\x20mais\x20natural\x20e\x20menos\x20robÃ³tica,\x20com\x20algumas\x20expressÃµes\x20coloquiais\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x204.\x20Varie\x20o\x20comprimento\x20das\x20frases\x20para\x20criar\x20um\x20ritmo\x20mais\x20natural\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x205.\x20Preserve\x20os\x20parÃ¡grafos\x20e\x20a\x20estrutura\x20geral\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x206.\x20Mantenha\x20todas\x20as\x20referÃªncias\x20e\x20exemplos\x20usados,\x20apenas\x20reescrevendo-os\x20de\x20forma\x20mais\x20natural\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x207.\x20Ocasionalmente\x20adicione\x20palavras\x20como\x20\x22tipo\x22,\x20\x22bem\x22,\x20\x22na\x20real\x22\x20para\x20dar\x20um\x20tom\x20mais\x20humano\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x208.\x20Evite\x20linguagem\x20artificial\x20ou\x20muito\x20tÃ©cnica\x20que\x20um\x20estudante\x20normalmente\x20nÃ£o\x20usaria\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Texto\x20para\x20reescrever:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'RedaÃ§Ã£o\x20Gerada:', 'status', 'AIzaSyAHt-8oOSmZPB_BFr4CtxR5w82yEgGr_Oo', 'https://generativelanguage.googleapis.com/v1beta/models/', 'RedaÃ§Ã£o\x20Humanizada:', 'CBzZSB2b2NlIHBhZ291IHBvciBpc3NvIHZvY2UgZm9pIGVuZ2FuYWRv', 'Erro\x20na\x20API\x20do\x20Gemini:\x20', 'parentElement', '[DEBUG]\x20Valor\x20apÃ³s\x20InputEvent:', 'includes', 'candidates', 'text', '.ql-editor', 'onChange', '.css-1cq7p20', 'length', 'error', 'href', 'focus', '[ERROR]\x20Erro\x20no\x20mÃ©todo\x20execCommand:', 'input', 'innerText', '54YXvwRn', 'indexOf', '[ERROR]\x20Falha\x20ao\x20inserir\x20texto.\x20Valor\x20atual:', 'dispatchEvent', 'atividade', '[DEBUG]\x20VerificaÃ§Ã£o\x20final\x20-\x20valor\x20do\x20textarea:', 'querySelector'];
    _0x6d8f = function () {
        return _0x2f00ca;
    };
    return _0x6d8f();
}

function _0x5f3e(_0x5393db, _0x5f1b44) {
    const _0x6d8fe = _0x6d8f();
    return _0x5f3e = function (_0x5f3e6c, _0xe4c9ac) {
        _0x5f3e6c = _0x5f3e6c - 0x199;
        let _0x26ed9e = _0x6d8fe[_0x5f3e6c];
        return _0x26ed9e;
    }, _0x5f3e(_0x5393db, _0x5f1b44);
}

// Adiciona um botão para colar conteúdo
function addPasteButton() {
    const button = document.createElement('button');
    button.textContent = 'Colar Conteúdo';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.zIndex = '9999';
    button.style.padding = '10px 15px';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';
    
    button.onclick = pasteContent;
    
    document.body.appendChild(button);
}

// Inicializa o botão quando a página carrega
if (document.readyState === 'complete') {
    addPasteButton();
} else {
    window.addEventListener('load', addPasteButton);
}

console[_0x44ac96(0x1c8)](_0x44ac96(0x1d1));
