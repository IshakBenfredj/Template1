const sr = ScrollReveal({
	origin : 'top',
	distance : '60px',
	duration: 2000,
	delay:100,
});

sr.reveal(`.special-heading, .info , .container > p, .intro-text,.feat`,{interval:100,});
sr.reveal(`.services-content .col:nth-child(1),.services-content .col:nth-child(2)`,{origin:'left',});
sr.reveal(`.services-content .col:nth-child(2)`,{origin:'right',});