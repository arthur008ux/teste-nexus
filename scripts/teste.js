const myObserver = new IntersectionObserver((efeitos) => {
    efeitos.forEach((efeito) => { 
        if(efeito.isIntersecting === true){
            
            efeito.target.classList.add('show')

        }

        else{
            efeito.target.classList.remove('show')
        }
    })
});

const sections = document.querySelectorAll('.hidden');
sections.forEach((section) =>
    myObserver.observe(section)
)

// estudar isso aqui TUTU para melhorar e mudar o que der

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('section.hidden:nth-child(6) .faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            item.classList.toggle('active');
            
            // Fecha outras FAQs quando uma é aberta
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
});