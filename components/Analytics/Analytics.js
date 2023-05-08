import React from "react";

export default function Analytics() {
	return (
		<>
			<script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-6HG05D01NB"
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `
                    window.dataLayer = window.dataLayer || []; function gtag()
				{dataLayer.push(arguments)}
				gtag('js', new Date()); gtag('config', 'G-6HG05D01NB');
                    `,
				}}
			/>
		</>
	);
}
