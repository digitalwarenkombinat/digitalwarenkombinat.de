export type navigationItem = Readonly<{
path: string,
label: string,
}>

export const headerMenu: Record<string, Record<string, navigationItem[]>> = {
de: {
	items: [
		{
		path: '/',
		label: 'Home'
		},
		{
			path: '/blog',
			label: 'Blog'
		},
		{
			path: '/about',
			label: 'Über uns'
		},
	]
},
en: {
	items: [
		{
			path: '/en/',
			label: 'Home',
		},
		{
			path: '/en/blog',
			label: 'Blog'
		},
		{
			path: '/en/about',
			label: 'About'
		},
	]
},

};
