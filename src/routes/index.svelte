<style>
    .cover-video {
        /* position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: -100; */
        position: fixed;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        z-index: -100;
        transform: translate(-50%, -50%);
    }
    .logo {
        font-family: 'Fondamento', cursive;
        font-size: 100px;
        text-align: center;
        color: #fff;
        text-decoration: overline;
        text-decoration-color: crimson;
    }
    .hero {
        text-align: center;
        color: peachpuff;
        font-size: 2rem;
    }
</style>

<svelte:head>
    <title>Samyog</title>
</svelte:head>
<div class="hero">
    <h1 class="logo">Samyog</h1>
    <p>Break bread and barriers... together.</p>
</div>

<video
    class="cover-video"
    src="https://cdn.glitch.com/3952eb32-bbc6-45a9-90a7-32ebd4b02693%2Fvideo.mp4?v=1578250146268"
    autoplay
    loop />

<aside id="firebaseui-auth-container" />
<div id="sign-in-status" />
<button id="sign-in" type="button"></button>
<p id="account-details" />
