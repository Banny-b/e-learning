document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq__question');

    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const simbol = this.querySelector('.faq__simbol');
            const wrapper = this.parentElement;
            const questionElement = this;

            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
                simbol.textContent = '+';
                wrapper.style.border = 'none';
                wrapper.style.borderRadius = '0';
                questionElement.style.borderBottom = '1px solid var(--white-95)';
                questionElement.style.borderTop = '1px solid var(--white-95)';
                questionElement.style.borderLeft = '1px solid var(--white-95)';
                questionElement.style.borderRight = '1px solid var(--white-95)';
                questionElement.style.borderRadius = '12px';
            } else {
                answer.classList.add('active');
                simbol.textContent = '×';
                wrapper.style.border = '1px solid var(--white-95)';
                wrapper.style.borderRadius = '12px';
                questionElement.style.borderBottom = '1px solid var(--white-95)';
                questionElement.style.borderTop = 'none';
                questionElement.style.borderLeft = 'none';
                questionElement.style.borderRight = 'none';
                questionElement.style.borderRadius = '0';
            }
        });
    });
});