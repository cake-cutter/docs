import type { FunctionalComponent } from 'preact';
import { h, Fragment } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';

const TableOfContents: FunctionalComponent<{ headers: any[], lang: string }> = ({ headers = [], lang = 'en' }) => {
	const itemOffsets = useRef([]);
	const [activeId, setActiveId] = useState<string>(undefined);

	useEffect(() => {
		const getItemOffsets = () => {
			const titles = document.querySelectorAll('article :is(h1, h2, h3, h4)');
			itemOffsets.current = Array.from(titles).map((title) => ({
				id: title.id,
				topOffset: title.getBoundingClientRect().top + window.scrollY,
			}));
		};

		getItemOffsets();
		window.addEventListener('resize', getItemOffsets);

		return () => {
			window.removeEventListener('resize', getItemOffsets);
		};
	}, []);

	return (
		<>
			<h2 class="heading">{lang === 'en' ? 'On this page' : 'En esta página'}</h2>
			<ul>
				<li class={`header-link depth-2 ${activeId === 'overview' ? 'active' : ''}`.trim()}>
					<a href="#overview">{lang === 'en' ? 'Overview' : 'General'}</a>
				</li>
				{headers
					.filter(({ depth }) => depth > 1 && depth < 4)
					.map((header) => (
						<li
							class={`header-link depth-${header.depth} ${
								activeId === header.slug ? 'active' : ''
							}`.trim()}
						>
							<a href={`#${header.slug}`}>{header.text}</a>
						</li>
					))}
			</ul>
		</>
	);
};

export default TableOfContents;
