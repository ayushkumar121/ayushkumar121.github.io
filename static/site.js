// Shared header/footer. Rendered into light DOM so static/index.css applies.

const NAV_LINKS = [
	["/", "home"],
	["/blog", "blog"],
	["https://github.com/ayushkumar121", "github"],
	["https://www.linkedin.com/in/ayush-kumar-b244b8131/", "linkedin"],
];

const EMAIL = "ayushkumar121@outlook.com";

// shown in the prompt: "~/blog $"
function cwd() {
	const seg = location.pathname.split("/").filter(Boolean)[0];
	return seg ? "~/" + seg : "~";
}

customElements.define("site-header", class extends HTMLElement {
	connectedCallback() {
		const links = NAV_LINKS
			.map(([href, text]) => `<a href="${href}">${text}</a>`)
			.join("\n\t\t\t\t");
		this.innerHTML = `<header>
		<div>
			<span class="prompt">${cwd()} <b>$</b></span>
			<nav>
				${links}
			</nav>
		</div>
	</header>`;
	}
});

customElements.define("site-footer", class extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<footer>
		<div>reach out to me <a href="mailto:${EMAIL}">${EMAIL}</a></div>
	</footer>`;
	}
});
