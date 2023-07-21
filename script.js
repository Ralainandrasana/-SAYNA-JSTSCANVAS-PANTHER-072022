    document.querySelectorAll('.animated').forEach(value =>{value.classList.add('visible');});

  // La fonction qui sera appelée lorsque les éléments deviennent visibles
  function fadeInLeftCallback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeInLeft');
        entry.target.classList.remove('visible');
        // Arrête d'observer cet élément après l'avoir rendu visible
        observer.unobserve(entry.target);
      }
    });
  }

  // Crée une instance de IntersectionObserver avec la fonction de rappel
  const fadeInLeftObserver = new IntersectionObserver(fadeInLeftCallback, {
    root: null, // La fenêtre visible est le root par défaut
    threshold: 0.5, // Définissez le seuil d'intersection selon vos besoins
  });

  // Sélectionnez tous les éléments avec la classe "fade-in-left" et observez-les
  const elementsToAnimate = document.querySelectorAll('.animated');
  elementsToAnimate.forEach(element => {
    fadeInLeftObserver.observe(element);
  });


  var submit = document.querySelector('.submit');
  var body = document.querySelector('.wrap-body');
  var popup_box = document.querySelector('.popup-box');

  submit.addEventListener('click',function(){
    body.classList.add('flou');
    popup_box.style.display='block';
    document.querySelector('.okButton').addEventListener('click',()=>{
      body.classList.remove('flou');
      popup_box.style.display='none';
    })
  })
