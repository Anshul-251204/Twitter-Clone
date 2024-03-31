export type MobileNavType = {
    icon: JSX.Element,
    path:string
}
export type DesktopNavType = {
    icon:JSX.Element,
    path:string,
    text:string
}
export type PostType = {
	id: number;
	content: string;
	image: {
		url: string;
		public_id: string;
	};
	owner: {
		username: string;
		avatar: {
			url: string;
			public_id: string;
		};
	};
	likes: number;
	createdAt: Date;
	updatedAt: Date;
	published:boolean;
    ownerId:string
};