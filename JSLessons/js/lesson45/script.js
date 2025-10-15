const btn = document.querySelector('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = () => {
//     alert('aloo');
// };

// btn.addEventListener('click', (e) => {
//     alert('aloo chatters');
//     e.target.remove();
// });

const i = 0;
const deleteElement = (e) => {
    e.target.remove();
    i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

// preventing default behavior of elements (like link click opening it in a tab)
const link = document.querySelector('a');
link.addEventListener('click', (e) => {
    e.preventDefault();
});