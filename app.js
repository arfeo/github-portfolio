const globals = {

	// Author login
	author: '',

	// Api base URL
	api: 'https://api.github.com',

	// Do not show the following repos in the projects list
	exceptions: [],

	// Show or hide counters
	counters: {
		projects: false,
		starred: false,
	},

	// Page blocks to be disabled
	disabled: {
		'author': false,
		'bio': false,
		'projects': false,
		'starred': false,
		'copyright': false,
	},

	// Items quantity each page returns
	limit: {
		'repos': 100,
		'starred': 100,
	},
};

const constants = {
	colors: {
		'Mercury':					'#ff2b2b',
		'TypeScript':				'#2b7489',
		'PureBasic':				'#5a6986',
		'Objective-C++':			'#6866fb',
		'Self':						'#0579aa',
		'edn':						'#db5855',
		'NewLisp':					'#87AED7',
		'Jupyter Notebook':			'#DA5B0B',
		'Rebol':					'#358a5b',
		'Frege':					'#00cafe',
		'Dart':						'#00B4AB',
		'AspectJ':					'#a957b0',
		'Shell':					'#89e051',
		'Web Ontology Language':	'#9cc9dd',
		'xBase':					'#403a40',
		'Eiffel':					'#946d57',
		'Nix':						'#7e7eff',
		'RAML':						'#77d9fb',
		'MTML':						'#b7e1f4',
		'Racket':					'#22228f',
		'Elixir':					'#6e4a7e',
		'SAS':						'#B34936',
		'Agda':						'#315665',
		'wisp':						'#7582D1',
		'D':						'#ba595e',
		'Kotlin':					'#F18E33',
		'Opal':						'#f7ede0',
		'Crystal':					'#776791',
		'Objective-C':				'#438eff',
		'ColdFusion CFC':			'#ed2cd6',
		'Oz':						'#fab738',
		'Mirah':					'#c7a938',
		'Objective-J':				'#ff0c5a',
		'Gosu':						'#82937f',
		'FreeMarker':				'#0050b2',
		'Ruby':						'#701516',
		'Component Pascal':			'#b0ce4e',
		'Arc':						'#aa2afe',
		'Brainfuck':				'#2F2530',
		'Nit':						'#009917',
		'APL':						'#5A8164',
		'Go':						'#375eab',
		'Visual Basic':				'#945db7',
		'PHP':						'#4F5D95',
		'Cirru':					'#ccccff',
		'SQF':						'#3F3F3F',
		'Glyph':					'#e4cc98',
		'Java':						'#b07219',
		'MAXScript':				'#00a6a6',
		'Scala':					'#DC322F',
		'Makefile':					'#427819',
		'ColdFusion':				'#ed2cd6',
		'Perl':						'#0298c3',
		'Lua':						'#000080',
		'Vue':						'#2c3e50',
		'Verilog':					'#b2b7f8',
		'Factor':					'#636746',
		'Haxe':						'#df7900',
		'Pure Data':				'#91de79',
		'Forth':					'#341708',
		'Red':						'#ee0000',
		'Hy':						'#7790B2',
		'Volt':						'#1F1F1F',
		'LSL':						'#3d9970',
		'eC':						'#913960',
		'CoffeeScript':				'#244776',
		'HTML':						'#e44b23',
		'Lex':						'#DBCA00',
		'API Blueprint':			'#2ACCA8',
		'Swift':					'#ffac45',
		'C':						'#555555',
		'AutoHotkey':				'#6594b9',
		'Isabelle':					'#FEFE00',
		'Metal':					'#8f14e9',
		'Clarion':					'#db901e',
		'JSONiq':					'#40d47e',
		'Boo':						'#d4bec1',
		'AutoIt':					'#1C3552',
		'Clojure':					'#db5855',
		'Rust':						'#dea584',
		'Prolog':					'#74283c',
		'SourcePawn':				'#5c7611',
		'AMPL':						'#E6EFBB',
		'FORTRAN':					'#4d41b1',
		'ANTLR':					'#9DC3FF',
		'Harbour':					'#0e60e3',
		'Tcl':						'#e4cc98',
		'BlitzMax':					'#cd6400',
		'PigLatin':					'#fcd7de',
		'Lasso':					'#999999',
		'ECL':						'#8a1267',
		'VHDL':						'#adb2cb',
		'Elm':						'#60B5CC',
		'Propeller Spin':			'#7fa2a7',
		'X10':						'#4B6BEF',
		'IDL':						'#a3522f',
		'ATS':						'#1ac620',
		'Ada':						'#02f88c',
		'Unity3D Asset':			'#ab69a1',
		'Nu':						'#c9df40',
		'LFE':						'#004200',
		'SuperCollider':			'#46390b',
		'Oxygene':					'#cdd0e3',
		'ASP':						'#6a40fd',
		'Assembly':					'#6E4C13',
		'Gnuplot':					'#f0a9f0',
		'JFlex':					'#DBCA00',
		'NetLinx':					'#0aa0ff',
		'Turing':					'#45f715',
		'Vala':						'#fbe5cd',
		'Processing':				'#0096D8',
		'Arduino':					'#bd79d1',
		'FLUX':						'#88ccff',
		'NetLogo':					'#ff6375',
		'C Sharp':					'#178600',
		'CSS':						'#563d7c',
		'Emacs Lisp':				'#c065db',
		'Stan':						'#b2011d',
		'SaltStack':				'#646464',
		'QML':						'#44a51c',
		'Pike':						'#005390',
		'LOLCODE':					'#cc9900',
		'ooc':						'#b0b77e',
		'Handlebars':				'#01a9d6',
		'J':						'#9EEDFF',
		'Mask':						'#f97732',
		'EmberScript':				'#FFF4F3',
		'TeX':						'#3D6117',
		'Nemerle':					'#3d3c6e',
		'KRL':						'#28431f',
		'Ren\'Py':					'#ff7f7f',
		'Unified Parallel C':		'#4e3617',
		'Golo':						'#88562A',
		'Fancy':					'#7b9db4',
		'OCaml':					'#3be133',
		'Shen':						'#120F14',
		'Pascal':					'#b0ce4e',
		'F#':						'#b845fc',
		'Puppet':					'#302B6D',
		'ActionScript':				'#882B0F',
		'Diff':						'#88dddd',
		'Ragel in Ruby Host':		'#9d5200',
		'Fantom':					'#dbded5',
		'Zephir':					'#118f9e',
		'Click':					'#E4E6F3',
		'Smalltalk':				'#596706',
		'DM':						'#447265',
		'Ioke':						'#078193',
		'PogoScript':				'#d80074',
		'LiveScript':				'#499886',
		'JavaScript':				'#f1e05a',
		'VimL':						'#199f4b',
		'PureScript':				'#1D222D',
		'ABAP':						'#E8274B',
		'Matlab':					'#bb92ac',
		'Slash':					'#007eff',
		'R':						'#198ce7',
		'Erlang':					'#B83998',
		'Pan':						'#cc0000',
		'LookML':					'#652B81',
		'Eagle':					'#814C05',
		'Scheme':					'#1e4aec',
		'PLSQL':					'#dad8d8',
		'Python':					'#3572A5',
		'Max':						'#c4a79c',
		'Common Lisp':				'#3fb68b',
		'Latte':					'#A8FF97',
		'XQuery':					'#5232e7',
		'Omgrofl':					'#cabbff',
		'XC':						'#99DA07',
		'Nimrod':					'#37775b',
		'SystemVerilog':			'#DAE1C2',
		'Chapel':					'#8dc63f',
		'Groovy':					'#e69f56',
		'Dylan':					'#6c616e',
		'E':						'#ccce35',
		'Parrot':					'#f3ca0a',
		'Grammatical Framework':	'#79aa7a',
		'Game Maker Language':		'#8fb200',
		'Papyrus':					'#6600cc',
		'NetLinx+ERB':				'#747faa',
		'Clean':					'#3F85AF',
		'Alloy':					'#64C800',
		'Squirrel':					'#800000',
		'PAWN':						'#dbb284',
		'UnrealScript':				'#a54c4d',
		'Standard ML':				'#dc566d',
		'Slim':						'#ff8f77',
		'Perl6':					'#0000fb',
		'Julia':					'#a270ba',
		'Haskell':					'#29b544',
		'NCL':						'#28431f',
		'Io':						'#a9188d',
		'Rouge':					'#cc0088',
		'C++':						'#f34b7d',
		'AGS Script':				'#B9D9FF',
		'Dogescript':				'#cca760',
		'nesC':						'#94B0C7',
	},
};

const sortArrayByKey = (arr, key) => {
    const buffer = arr;

    buffer.sort((a, b) => {
    	return b[key] - a[key];
    });

    return buffer;
};

const apiData = (url, data) => {
	return new Promise((resolve, reject) => {
		const params = Object.entries(data).map(([key, val]) => `${key}=${val}`).join('&');
		const xhr = new XMLHttpRequest();

	    xhr.overrideMimeType('application/json');
	    xhr.open('GET', `${url}?${params}`, true);

	    xhr.onload = function() {
	    	if(this.readyState == 4) {
		        if(this.status >= 200 && this.status < 300) {
		            resolve(xhr.responseText);
		        } else {
		        	reject(xhr.statusText);
		        }
		    }
	    }

	    xhr.onerror = function() {
			reject(xhr.statusText);
		}

	    xhr.send();
	});
};

const fetchApiData = async () => {
	let githubAuthor = [];
	let githubRepos = [];
	let githubStarred = [];

	// Fetch GitHub api data
	try {
		const [a, r, s] = await Promise.all([
			apiData(`${globals.api}/users/${globals.author}`, {}),
			apiData(`${globals.api}/users/${globals.author}/repos?per_page=${globals.limit.repos}`, {}),
			apiData(`${globals.api}/users/${globals.author}/starred?per_page=${globals.limit.starred}`, {})
		]);

		githubAuthor = JSON.parse(a);
		githubRepos = JSON.parse(r);
		githubStarred = JSON.parse(s);

		return { githubAuthor, githubRepos, githubStarred };
	} catch (err) {
		rootContainer.innerHTML = `<div class="error">Error fetching API data: ${err}</div>`;

		return;
	}
};

const customPageBlock = (title, content) => {
	const rootContainer = document.getElementById('root');
	const pageBlock = document.createElement('div');

	pageBlock.className = 'custom-block';
	pageBlock.innerHTML = (`
		<div class="custom-block__title">${title()}</div>
		<div class="custom-block__content">${content()}</div>
	`);

	rootContainer.appendChild(pageBlock);
};

const renderAuthorBlock = (githubAuthor) => {
	if (!globals.disabled.author) {
		const rootContainer = document.getElementById('root');
		const authorContainer = document.createElement('div');

		authorContainer.className = 'author';
		authorContainer.innerHTML = (`
			<div class="author__avatar-dock">
				<img src="${githubAuthor.avatar_url}" class="author__avatar" alt="" />
			</div>
			<div class="author__info-dock">
				<div class="author__name">
					${githubAuthor.name}
				</div>
				<div class="author__url">
					<a href="${githubAuthor.html_url}">${githubAuthor.html_url}</a>
				</div>
			</div>
		`);

		rootContainer.appendChild(authorContainer);

		// Set page title
		const pageTitle = document.getElementsByTagName('title')[0];

		pageTitle.innerHTML = `${githubAuthor.name} (${githubAuthor.login})`;

		document.body.style.paddingTop = '180px';
	}
};

const renderBioBlock = (githubAuthor) => {
	if (!globals.disabled.bio) {
		const rootContainer = document.getElementById('root');
		const bioContainer = document.createElement('div');

		bioContainer.className = 'bio';
		bioContainer.innerHTML = (`
			<div class="bio__dock">
				${githubAuthor.bio ? githubAuthor.bio : 'Bio is empty.'}
			</div>
		`);

		rootContainer.appendChild(bioContainer);
	}
};

const renderReposList = (githubRepos) => {
	let mostUsedLanguages = [];

	if (!globals.disabled.projects) {
		const rootContainer = document.getElementById('root');
		const projectsTitle = document.createElement('div');
		const reposLanguages = document.createElement('div');
		const projectsContainer = document.createElement('div');
		const reposDock = document.createElement('div');

		// Render block container
		projectsContainer.className = 'projects';

		rootContainer.appendChild(projectsContainer);

		// Set block title
		projectsTitle.className = 'projects__title';

		projectsContainer.appendChild(projectsTitle);

		if (githubRepos && githubRepos.length > 0) {
			let reposCount = 0;

			// Render repos dock
			reposDock.className = 'projects__dock';

			projectsContainer.appendChild(reposDock);

			// Languages count
			reposLanguages.className = 'projects__laguages';

			reposDock.appendChild(reposLanguages);

			for (let i = 0; i < githubRepos.length; i++) {
				const name = githubRepos[i].name;
				const url = githubRepos[i].html_url;
				const description = githubRepos[i].description;
				const language = githubRepos[i].language;

				if (globals.exceptions.indexOf(name) === -1) {
					reposCount++;

					// Render repo info container
					const repoInfo = document.createElement('div');

					repoInfo.className = 'projects__info';
					repoInfo.innerHTML = (`
						<div class="projects__info-name">
							<a href="${url}">${name}</a>
						</div>
					`);

					reposDock.appendChild(repoInfo);

					if (description) {

						// Repo description
						const repoDescription = document.createElement('div');

						repoDescription.className = 'projects__info-description';
						repoDescription.innerHTML = description;
						repoInfo.appendChild(repoDescription);
					}

					const repoServiceBlock = document.createElement('div');

					repoServiceBlock.className = 'projects__info-service-block';

					repoInfo.appendChild(repoServiceBlock);

					if (language) {
						const languageCounter = mostUsedLanguages.filter(el => el.language === language);

						if (!languageCounter.length) {
							mostUsedLanguages.push({
								language,
								count: 1,
							});
						} else {
							languageCounter[0].count += 1;
						}

						// Repo language
						const repoLanguage = document.createElement('div');

						repoLanguage.className = 'projects__info-language';
						repoLanguage.innerHTML = (`
							<div class="projects__info-language-icon" style="background-color:${constants.colors[language]}"></div>
							<div class="projects__info-language-name">
								${language}
							</div>
						`);

						repoServiceBlock.appendChild(repoLanguage);

						// Repo readme
						const repoReadme = document.createElement('div');

						repoReadme.className = 'projects__info-readme';
						repoReadme.innerHTML = (`
							<span class="pseudolink">Readme</span>
						`);

						repoServiceBlock.appendChild(repoReadme);

						// Repo readme modal
						repoReadme.addEventListener('click', async () => {
							const layerContainer = document.createElement('div');
							const readme = await apiData(`https://raw.githubusercontent.com/${globals.author}/${githubRepos[i].name}/master/README.md`, {})
													.catch(() => 'No description provided.');

							layerContainer.className = 'layer-container';
							layerContainer.innerHTML = (`
								<div class="layer-backdrop"></div>
								<div class="layer-modal">
									<div id="layer-close" class="layer-close">✕</div>
									<div class="layer-body">${markdownProcessing(readme)}</div>
								</div>
							`);

							document.body.appendChild(layerContainer);

							document.getElementById('layer-close').addEventListener('click', () => {
								layerContainer.remove();
							});
						});
					} else {
						repoInfo.style.paddingBottom = '15px';
					}
				}
			}

			projectsTitle.innerHTML = 'Projects';

			if (reposCount > 0 && globals.counters.projects) {

				// Render repos counter
				const cnt = document.createElement('div');

				cnt.className = 'projects__title-counter';
				cnt.innerHTML = reposCount;

				projectsTitle.appendChild(cnt);
			}

			if (reposCount > 0 && mostUsedLanguages.length > 0) {
				const b = sortArrayByKey(mostUsedLanguages, 'count');

				// Render languages counter
				reposLanguages.style.display = 'flex';

				for (l of b) {
					const langCounter = document.createElement('div');
					const zoom = Math.ceil(l.count * 100 / reposCount) / 10 / b[b.length - 1].count;

					langCounter.className = 'count';
					langCounter.innerHTML = (`
						<div class="icon" style="zoom: ${zoom}; background-color:${constants.colors[l.language]}"></div>
						<div class="name">${l.language}</div>
					`);

					reposLanguages.appendChild(langCounter);
				}
			}
		} else {
			projectsContainer.appendChild(document.createTextNode('No repos found.'));
		}
	}
};

const renderStarredList = (githubStarred) => {
	if (!globals.disabled.starred) {
		const rootContainer = document.getElementById('root');

		// Render block container
		const starredContainer = document.createElement('div');

		starredContainer.className = 'starred';

		rootContainer.appendChild(starredContainer);

		// Set block title
		const starredTitle = document.createElement('div');

		starredTitle.className = 'starred__title';

		starredContainer.appendChild(starredTitle);

		if (githubStarred && githubStarred.length > 0 && globals.limit.starred > 0) {
			let starredCount = 0;

			// Render starred dock
			const starredDock = document.createElement('div');

			starredDock.className = 'starred__dock';

			starredContainer.appendChild(starredDock);

			for (let i = 0; i < githubStarred.length; i++) {
				const name = githubStarred[i].full_name;
				const url = githubStarred[i].html_url;
				const description = githubStarred[i].description;
				const language = githubStarred[i].language;

				if (starredCount < globals.limit.starred) {
					starredCount++;

					// Render starred info container
					const starredInfo = document.createElement('div');

					starredInfo.className = 'starred__info';
					starredInfo.innerHTML = (`
						<div class="starred__info-name">
							<a href="${url}">${name}</a>
						</div>
					`);

					starredDock.appendChild(starredInfo);

					if (description) {

						// Starred description
						const starredDescription = document.createElement('div');

						starredDescription.className = 'starred__info-description';
						starredDescription.innerHTML = description;

						starredInfo.appendChild(starredDescription);
					}

					if (language) {

						// Starred language
						const starredLanguage = document.createElement('div');

						starredLanguage.className = 'starred__info-language';
						starredLanguage.innerHTML = (`
							<div class="starred__info-language-icon" style="background-color:${constants.colors[language]}"></div>
							<div class="starred__info-language-name">
								${language}
							</div>
						`);

						starredInfo.appendChild(starredLanguage);
					}
				}
			}

			// View all link
			const starredViewAll = document.createElement('div');

			starredViewAll.className = 'starred__view-all';
			starredViewAll.innerHTML = `<a href="https://github.com/${globals.author}?tab=stars">View all starred projects</a>`;

			starredDock.appendChild(starredViewAll);

			starredTitle.innerHTML = 'Starred';

			if (globals.counters.starred) {

				// Render starred counter
				const cnt = document.createElement('div');

				cnt.className = 'starred__title-counter';
				cnt.innerHTML = starredCount;

				starredTitle.appendChild(cnt);
			}
		} else {
			starredContainer.appendChild(document.createTextNode('No starred repos found.'));
		}
	}
};

const renderCopyright = (githubAuthor) => {
	if (!globals.disabled.copyright) {
		const rootContainer = document.getElementById('root');
		const copyrightContainer = document.createElement('div');

		copyrightContainer.className = 'copyright';
		copyrightContainer.innerHTML = `Copyright © ${(new Date()).getFullYear()} ${githubAuthor.name} & GitHub, Inc.`;

		rootContainer.appendChild(copyrightContainer);
	}
};

const markdownProcessing = (source) => {
	let proc = source;

	// Headers
	proc = proc.replace(/(^|[^#])# (.*)/gui, '$1<h1>$2</h1>');
	proc = proc.replace(/(^|[^#])## (.*)/gui, '$1<h2>$2</h2>');
	proc = proc.replace(/(^|[^#])### (.*)/gui, '$1<h3>$2</h3>');
	proc = proc.replace(/(^|[^#])#### (.*)/gui, '$1<h4>$2</h4>');
	proc = proc.replace(/(^|[^#])##### (.*)/gui, '$1<h5>$2</h5>');
	proc = proc.replace(/(^|[^#])###### (.*)/gui, '$1<h6>$2</h6>');

	// Images and links
	proc = proc.replace(/!\[([^\]]*?)\]\(((?:.)*?)\)/gui, '<img src="$2" alt="$1" title="$5" />');
	proc = proc.replace(/(\[([^\]]*?)\])\(((?:.)*?)\)/gui, '<a href="$3" target="_blank">$2</a>');
	proc = proc.replace(/([\(\s)]+)(http[s]?:[\/]{2}[^\s]+)/gui, '$1<a href="$2" target="_blank">$2</a>');

	// Text
	proc = proc.replace(/(^|[\s])[_]{1}([^_]+)[_]{1}(?!_)/gui, '$1<em>$2</em>');
	proc = proc.replace(/(^|[^\*])\*(?!\*)(.*?)\*(?!\*)/gui, '$1<em>$2</em>');
	proc = proc.replace(/(^|[\s])[_]{2}([^_]+)[_]{2}(?!_)/gui, '$1<strong>$2</strong>');
	proc = proc.replace(/(^|[^\*])[\*]{2}(?!\*)(.*?)[\*]{2}(?!\*)/gui, '$1<strong>$2</strong>');
	proc = proc.replace(/(^|[\s])[~]{2}([^~]+)[~]{2}(?!~)/gui, '$1<strike>$2</strike>');

	// Code
	proc = proc.replace(/(^|[^`])`([^`]+)`(?!`)/gui, '$1<code>$2</code>');
	proc = proc.replace(/[`]{3}.*?\n([^`]+)[`]{3}/gui, '<pre>$1</pre>');
	proc = proc.replace(/(^|[\n]{2})(([\s]{4}.*)+)/gui, '$1<pre>$2</pre>');

	// Lists
	proc = proc.replace(/(^|[\n]{2})([\*|\-|\+]\s)/gui, '$1<ul>\n$2');
	proc = proc.replace(/(^|[\n]{2})(\d\.\s)/gui, '$1<ol>\n$2');
	proc = proc.replace(/(^|\n)(([\*|\-|\+]\s.*)[\n]{2})/gui, '$1$3\n</ul>\n\n');
	proc = proc.replace(/(^|\n)(([\s]{2}[\*|\-|\+]\s.*)[\n]{2})/gui, '$1$3\n</ul>\n\n');
	proc = proc.replace(/(^|\n)((\d\.\s.*)[\n]{2})/gui, '$1$3\n</ol>\n\n');
	proc = proc.replace(/(^|[\n])[\*|\-|\+]{1}\s(.*)((\n[\s]{2}[\*|\-|\+]\s.*)+)/gui, '$1<li>$2\n<ul>$3\n</ul>\n</li>');
	proc = proc.replace(/(^|[\n])\d\.\s(.*)((\n[\s]{2}\d\.\s.*)+)/gui, '$1<li>$2\n<ol>$3\n</ol>\n</li>');
	proc = proc.replace(/(^|[\n])[\*|\-|\+]{1}\s(.*)/gui, '$1<li>$2</li>');
	proc = proc.replace(/(^|[\n])[\s]{2}[\*|\-|\+]{1}\s(.*)/gui, '$1<li>$2</li>');
	proc = proc.replace(/(^|[\n])\d\.\s(.*)/gui, '$1<li>$2</li>');
	proc = proc.replace(/(^|[\n])[\s]{2}\d\.\s(.*)/gui, '$1<li>$2</li>');

	// Quotes
	proc = proc.replace(/(^|[\n]{2})((>|&gt;)[\s]?)/gui, '$1<blockquote>\n$2');
	proc = proc.replace(/(^|\n)(((>|&gt;)[\s]?.*)[\n]{2})/gui, '$1$3</blockquote>\n');
	proc = proc.replace(/(^|[\n])(>|&gt;)\n/gui, '\n\n');
	proc = proc.replace(/(^|[\n])(>|&gt;)[\s]?(.*)/gui, '$3\n');

	// Paragraphs
	proc = proc.replace(/(^|[\n]{2})(?!<)(.*)/gui, '<p>$2</p>');

	return proc;
};

window.onscroll = () => {
	if (!globals.disabled.author) {
		const top  = window.pageYOffset || document.documentElement.scrollTop;
		const authorContainer = document.querySelector('.author');
		const authorAvatar = document.querySelector('.author__avatar');
		const authorInfoDock = document.querySelector('.author__info-dock');

		// Add shadow to author container on window scroll
		authorContainer.style.boxShadow = top >= 1 ? '0 2px 6px rgba(9,65,119,0.3)' : 'none';

		// Scale author container on window scroll
		authorContainer.style.height = `calc(130px - ${top}px)`;
		authorAvatar.style.width = `calc(130px - ${top}px)`;
		authorAvatar.style.height = `calc(130px - ${top}px)`;
		const scale = (100 - (top <= 30 ? top : 30)) / 100;
		authorInfoDock.style.transform = `scale(${scale})`;
	}
};

window.onload = async () => {
	const { githubAuthor, githubRepos, githubStarred } = await fetchApiData();

	// Render page blocks
	renderAuthorBlock(githubAuthor);
	renderBioBlock(githubAuthor);
	renderReposList(githubRepos);
	renderStarredList(githubStarred);
	renderCopyright(githubAuthor);
};
