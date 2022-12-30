import Head from 'next/head'
import { FC } from 'react';

type HaderProps = {
	title: string;
	description?: string;
	faviconUrl?: string;
}

export const Header: FC<HaderProps> = ({ title, description, faviconUrl }: HaderProps) => {
    return (
			<Head>
				<title>{ title }</title>
				<meta name="description" content={ description } />
				<link rel="icon" href={ faviconUrl } />
			</Head>
    );
};
