const texto = `[SEU TEXTO COMPLETO AQUI]`;

function inserirComObserver() {
  const textarea = document.getElementById('fy81qgHQ');
  
  if (textarea) {
    const observer = new MutationObserver(() => {
      if (textarea.value !== texto) {
        textarea.value = texto;
        setTimeout(() => {
          textarea.dispatchEvent(new Event('change', { bubbles: true }));
        }, 50);
      }
    });
    
    observer.observe(textarea, { attributes: true, childList: false, subtree: false });
    
    // Insere o texto inicial
    textarea.value = texto;
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
    
    console.log('Observer ativado - texto será mantido');
  }
}

inserirComObserver();
