document.addEventListener('DOMContentLoaded', () => {
    
    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all others
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });
            
            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once animated
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.slide-up, .reveal-image');
    animatedElements.forEach(el => observer.observe(el));

    // Modal Typeform Flow Logic
    const modal = document.getElementById('modal-triaje');
    const openBtns = document.querySelectorAll('.open-modal-btn');
    const closeBtn = document.querySelector('.modal-close');
    const steps = document.querySelectorAll('.modal-body');
    const progressFill = document.querySelector('.progress-fill');
    const eyebrowStep = document.getElementById('modal-eyebrow');
    let currentStep = 0;

    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // lock scroll
            currentStep = 0;
            
            // Reset form state in case it was closed during rejection
            const rejectStep = document.querySelector('.step-reject');
            if(rejectStep) {
                rejectStep.style.display = 'none';
                rejectStep.classList.remove('active');
            }
            steps.forEach(s => s.style.display = ''); 
            progressFill.style.backgroundColor = 'var(--accent-color)';
            
            updateStepDisplay();
        });
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if(closeBtn) closeBtn.addEventListener('click', closeModal);
    if(modal) modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });
    document.querySelectorAll('.modal-close-btn').forEach(btn => btn.addEventListener('click', closeModal));

    // Valid path
    document.querySelectorAll('.form-btn.next-step').forEach(btn => {
        btn.addEventListener('click', () => {
            steps[currentStep].classList.remove('active');
            currentStep++;
            if(currentStep < steps.length) {
                updateStepDisplay();
            }
        });
    });

    // Reject path (Low budget)
    document.querySelectorAll('.form-btn.reject-step').forEach(btn => {
        btn.addEventListener('click', () => {
            steps[currentStep].classList.remove('active');
            steps.forEach(s => s.style.display = 'none'); 
            
            const rejectStep = document.querySelector('.step-reject');
            if(rejectStep) {
                rejectStep.style.display = 'block';
                setTimeout(() => rejectStep.classList.add('active'), 10);
            }
            
            progressFill.style.width = '100%';
            progressFill.style.backgroundColor = '#ccc';
            if(eyebrowStep) eyebrowStep.innerText = 'Información Importante';
        });
    });

    function updateStepDisplay() {
        steps.forEach((s, idx) => {
            if(idx === currentStep) s.classList.add('active');
            else s.classList.remove('active');
        });
        progressFill.style.width = ((currentStep+1) / steps.length * 100) + '%';
        if(eyebrowStep) eyebrowStep.innerText = `Paso ${currentStep+1} de ${steps.length}`;
    }
});
