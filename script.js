(function() {
    // Função de ofuscação básica
    const _0xod3e = ['value', 'querySelector', 'textarea', 'input', 'change', 
                    'focus', 'blur', 'dispatchEvent', 'parentElement', 'execCommand',
                    'insertText', 'success', 'error', 'log', 'Failed to paste content',
                    'Content pasted successfully!', 'addEventListener', 'click',
                    'createElement', 'button', 'Colar Conteúdo', 'position', 'fixed',
                    'bottom', '20px', 'right', 'zIndex', '9999', 'padding', '10px 15px',
                    'backgroundColor', '#4CAF50', 'color', 'white', 'border', 'none',
                    'borderRadius', '4px', 'cursor', 'pointer', 'body', 'appendChild',
                    'style', 'textContent', 'onclick'];

    // Função auxiliar
    function _0x12ab(_0x1d2f, _0x5873) {
        return _0xod3e[_0x1d2f - 0x1];
    }

    // Função principal para inserir texto
    async function pasteToTextarea(content) {
        const textareas = document[_0x12ab(0x2)](_0x12ab(0x3));
        if (textareas.length === 0) return false;

        const target = textareas[textareas.length - 1];
        
        try {
            // Tenta métodos diferentes para contornar proteções
            target[_0x12ab(0x1)] = content;
            target.dispatchEvent(new Event(_0x12ab(0x4), {bubbles: true}));
            
            setTimeout(() => {
                target[_0x12ab(0x6)]();
                target[_0x12ab(0x5)]();
                document.execCommand(_0x12ab(0xa), false, content);
                target.dispatchEvent(new Event(_0x12ab(0x4), {bubbles: true}));
            }, 100);
            
            return true;
        } catch (e) {
            console[_0x12ab(0xe)](_0x12ab(0xf), e);
            return false;
        }
    }

    // Interface para o usuário
    function createPasteButton() {
        const btn = document[_0x12ab(0x13)](_0x12ab(0x14));
        btn[_0x12ab(0x2b)] = _0x12ab(0x15);
        
        // Estilos do botão
        const styles = {
            [_0x12ab(0x16)]: _0x12ab(0x17),
            [_0x12ab(0x18)]: _0x12ab(0x19),
            [_0x12ab(0x1a)]: _0x12ab(0x1b),
            [_0x12ab(0x1c)]: '9999',
            [_0x12ab(0x1d)]: _0x12ab(0x1e),
            [_0x12ab(0x1f)]: _0x12ab(0x20),
            [_0x12ab(0x21)]: _0x12ab(0x22),
            [_0x12ab(0x23)]: _0x12ab(0x24),
            [_0x12ab(0x25)]: _0x12ab(0x26),
            [_0x12ab(0x27)]: _0x12ab(0x28)
        };
        
        Object.assign(btn[_0x12ab(0x2a)], styles);
        
        btn[_0x12ab(0x2c)] = async function() {
            const content = prompt("Cole o conteúdo que deseja inserir:");
            if (content) {
                const result = await pasteToTextarea(content);
                alert(result ? _0x12ab(0x10) : _0x12ab(0xf));
            }
        };
        
        document[_0x12ab(0x29)][_0x12ab(0x2d)](btn);
    }

    // Inicialização
    if (document.readyState === 'complete') {
        createPasteButton();
    } else {
        document[_0x12ab(0x11)]('DOMContentLoaded', createPasteButton);
    }
})();
