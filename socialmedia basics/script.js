document.addEventListener('DOM ContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-button');
    const loginForm = document.getElementById('login-form');
    const profileSelction = document.getElementById('profile');
    const postForm = document.getElementById('post-form');
    const feedSection = document.getElementById('feed');
    const usernameDisplay = document.getElementById('username');
    const loginFormElement = document.getElementById('login');
    const userInput = document.getElementById('username-input');
    const form = document.getElementById('new-post-form');
    const postsContainer = document.getElementById('posts');

    let currentUser = null;

    function showLogin() {
        loginForm.style.display = 'block';
        profileSelction.style.display = 'none';
        postForm.style.display = 'none';
        feedSection.style.display = 'block';
    }

    loginButton.addEventListener('click', () => {
        showLogin();
    });

    logoutButton.addEventListener('click', () => {
        usernameDisplay.textContent = 'User'
        loginButton.style.display = 'inline'
        logoutButton.style.display = 'none'
        showLogin();
    });

    loginFormElement.addEventListener('submit', (event) => {
        event.preventDefault();
        currentUser = usernameInput.value;
        usernameDisplay.textContent = currentUser;
        loginButton.style.display = 'none';
        logoutButton.style.display = 'inline';
        showProfile();
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const postContent = document.getElementById('post-content').value;
        if(postContent.trim()) {
            addPost(postContent);
            form.reset();
        }
    });

    function addPost(content) {
        const post = document.createElement('div');
        post.classList.add('post');
        post.textContent = content;
        postsContainer.prepend(post);
    }

    showLogin();
});