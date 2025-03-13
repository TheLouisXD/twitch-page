async function checkTwitchStream() {
    const clientId = 'ngqxoj11rdaa0qmf6fzuhisogl09p4';
    const accestoken = 'pn4gfyltc3e9p94neypwbs9bm9t5no';
    const userLogin = 'TheLouisXD';
    const url = `https://api.twitch.tv/helix/streams?user_login=${userLogin}`;

    const response = await fetch(url, {
        headers: {
            'Client-ID': clientId,
            'Authorization': `Bearer ${accestoken}`
        }
    });

    console.log(response);

    const data = await response.json();
    const isLive = data.data && data.data.length > 0;

    const twitchButton = document.getElementById('twitch-button');
    const profileImage = document.querySelector('.profile-image');

    if (isLive) {
        twitchButton.textContent = '🔴 Estoy en vivo, ven a ver';
        profileImage.innerHTML = `
            <iframe
                src="https://player.twitch.tv/?channel=${userLogin}&parent=thelouisxd.github.io"
                height="300"
                width="400"
                allowfullscreen>
            </iframe>
            `;
    } else {
        twitchButton.textContent = '👀 Mira mi canal de twitch :3';
    }
}

checkTwitchStream();