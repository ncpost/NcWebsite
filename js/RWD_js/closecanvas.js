function offCanvasListener(offcanvasRight) {
    let myOffCanvas = document.getElementById('offcanvasRight');
  
    const hideCanvas = () => {
      let openedCanvas = bootstrap.Offcanvas.getInstance(myOffCanvas);
      openedCanvas.hide();
      event.target.removeEventListener('mouseleave', hideCanvas);
    }
    const listenToMouseLeave = (event) => {
      event.target.addEventListener('mouseleave', hideCanvas);
    }
    
    myOffCanvas.addEventListener('shown.bs.offcanvas', listenToMouseLeave);
  }
  offCanvasListener('offcanvasExample');
