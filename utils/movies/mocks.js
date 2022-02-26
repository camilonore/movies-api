const moviesMock = [
  {
    id: 'bd78b960-214c-453d-8f67-b1e7bf9e2935',
    title: 'East, West, East: The Final Sprint',
    year: 1994,
    cover: 'http://dummyimage.com/147x119.png/dddddd/000000',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    duration: 1906,
    contentRating: 'PG',
    source:
      'http://wunderground.com/bibendum/felis.jpg?nec=consequat&dui=metus&luctus=sapien&rutrum=ut&nulla=nunc&tellus=vestibulum&in=ante&sagittis=ipsum&dui=primis&vel=in&nisl=faucibus&duis=orci&ac=luctus&nibh=et&fusce=ultrices&lacus=posuere&purus=cubilia&aliquet=curae&at=mauris&feugiat=viverra&non=diam&pretium=vitae&quis=quam&lectus=suspendisse&suspendisse=potenti&potenti=nullam&in=porttitor&eleifend=lacus&quam=at&a=turpis&odio=donec&in=posuere&hac=metus&habitasse=vitae&platea=ipsum&dictumst=aliquam&maecenas=non&ut=mauris&massa=morbi&quis=non&augue=lectus&luctus=aliquam&tincidunt=sit&nulla=amet&mollis=diam&molestie=in&lorem=magna&quisque=bibendum&ut=imperdiet&erat=nullam&curabitur=orci&gravida=pede&nisi=venenatis&at=non&nibh=sodales&in=sed&hac=tincidunt&habitasse=eu&platea=felis&dictumst=fusce&aliquam=posuere&augue=felis&quam=sed&sollicitudin=lacus&vitae=morbi&consectetuer=sem&eget=mauris&rutrum=laoreet&at=ut&lorem=rhoncus&integer=aliquet&tincidunt=pulvinar&ante=sed&vel=nisl&ipsum=nunc',
    tags: 'Comedy|Drama',
  },
  {
    id: '5f01c0a5-9bf4-4282-b75c-1f3aca86ac3b',
    title: 'Jacques Brel Is Alive and Well and Living in Paris',
    year: 1994,
    cover: 'http://dummyimage.com/120x124.png/cc0000/ffffff',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    duration: 2035,
    contentRating: 'PG-13',
    source:
      'https://yellowbook.com/nisi/venenatis/tristique/fusce/congue/diam/id.html?consequat=velit&morbi=eu&a=est&ipsum=congue&integer=elementum&a=in&nibh=hac&in=habitasse&quis=platea&justo=dictumst&maecenas=morbi&rhoncus=vestibulum&aliquam=velit&lacus=id&morbi=pretium&quis=iaculis&tortor=diam&id=erat&nulla=fermentum&ultrices=justo&aliquet=nec&maecenas=condimentum&leo=neque&odio=sapien&condimentum=placerat&id=ante&luctus=nulla&nec=justo&molestie=aliquam&sed=quis&justo=turpis&pellentesque=eget&viverra=elit&pede=sodales&ac=scelerisque&diam=mauris&cras=sit&pellentesque=amet&volutpat=eros&dui=suspendisse&maecenas=accumsan&tristique=tortor&est=quis&et=turpis&tempus=sed&semper=ante&est=vivamus&quam=tortor&pharetra=duis&magna=mattis&ac=egestas&consequat=metus&metus=aenean&sapien=fermentum&ut=donec&nunc=ut&vestibulum=mauris&ante=eget&ipsum=massa&primis=tempor',
    tags: 'Musical',
  },
  {
    id: 'f9ce5013-3cc9-4682-b5c5-f60c0493e3bd',
    title: 'Pauly Shore Is Dead',
    year: 2003,
    cover: 'http://dummyimage.com/134x119.png/dddddd/000000',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 2036,
    contentRating: 'PG',
    source:
      'http://economist.com/in/felis/eu.js?ante=ornare&ipsum=imperdiet&primis=sapien&in=urna&faucibus=pretium&orci=nisl&luctus=ut&et=volutpat&ultrices=sapien&posuere=arcu&cubilia=sed&curae=augue&nulla=aliquam&dapibus=erat&dolor=volutpat&vel=in&est=congue&donec=etiam&odio=justo&justo=etiam&sollicitudin=pretium&ut=iaculis&suscipit=justo&a=in&feugiat=hac&et=habitasse&eros=platea&vestibulum=dictumst&ac=etiam&est=faucibus&lacinia=cursus&nisi=urna&venenatis=ut&tristique=tellus&fusce=nulla&congue=ut&diam=erat&id=id&ornare=mauris&imperdiet=vulputate&sapien=elementum&urna=nullam&pretium=varius&nisl=nulla&ut=facilisi&volutpat=cras&sapien=non&arcu=velit&sed=nec&augue=nisi&aliquam=vulputate&erat=nonummy&volutpat=maecenas&in=tincidunt&congue=lacus&etiam=at&justo=velit&etiam=vivamus&pretium=vel&iaculis=nulla&justo=eget&in=eros&hac=elementum&habitasse=pellentesque&platea=quisque&dictumst=porta&etiam=volutpat&faucibus=erat&cursus=quisque&urna=erat&ut=eros&tellus=viverra&nulla=eget&ut=congue&erat=eget&id=semper&mauris=rutrum&vulputate=nulla&elementum=nunc&nullam=purus&varius=phasellus&nulla=in&facilisi=felis&cras=donec&non=semper&velit=sapien&nec=a&nisi=libero&vulputate=nam&nonummy=dui&maecenas=proin&tincidunt=leo&lacus=odio&at=porttitor&velit=id&vivamus=consequat&vel=in&nulla=consequat&eget=ut',
    tags: 'Comedy',
  },
  {
    id: '12e164b6-8e93-4890-a4c6-35ce26694696',
    title: 'Heroic Ones, The (Shi san tai bao)',
    year: 2012,
    cover: 'http://dummyimage.com/234x100.png/cc0000/ffffff',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    duration: 1938,
    contentRating: 'G',
    source:
      'https://nih.gov/eu/magna/vulputate/luctus/cum/sociis/natoque.jpg?ut=faucibus&rhoncus=orci&aliquet=luctus&pulvinar=et&sed=ultrices&nisl=posuere&nunc=cubilia&rhoncus=curae&dui=nulla&vel=dapibus&sem=dolor&sed=vel&sagittis=est&nam=donec&congue=odio&risus=justo&semper=sollicitudin&porta=ut&volutpat=suscipit&quam=a&pede=feugiat&lobortis=et&ligula=eros&sit=vestibulum&amet=ac&eleifend=est&pede=lacinia&libero=nisi&quis=venenatis&orci=tristique&nullam=fusce&molestie=congue&nibh=diam&in=id&lectus=ornare&pellentesque=imperdiet&at=sapien&nulla=urna&suspendisse=pretium&potenti=nisl&cras=ut&in=volutpat&purus=sapien&eu=arcu&magna=sed&vulputate=augue&luctus=aliquam&cum=erat&sociis=volutpat&natoque=in&penatibus=congue&et=etiam&magnis=justo&dis=etiam&parturient=pretium&montes=iaculis&nascetur=justo&ridiculus=in&mus=hac&vivamus=habitasse&vestibulum=platea&sagittis=dictumst&sapien=etiam&cum=faucibus&sociis=cursus&natoque=urna&penatibus=ut&et=tellus&magnis=nulla&dis=ut&parturient=erat',
    tags: 'Action|Drama',
  },
  {
    id: '8fb96bd8-6fe2-462a-a86b-21e04ec847da',
    title: 'Rawhead Rex',
    year: 1997,
    cover: 'http://dummyimage.com/111x206.png/cc0000/ffffff',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    duration: 2056,
    contentRating: 'G',
    source:
      'https://hc360.com/at/nulla/suspendisse.jsp?augue=erat&quam=volutpat&sollicitudin=in&vitae=congue&consectetuer=etiam&eget=justo&rutrum=etiam&at=pretium&lorem=iaculis&integer=justo&tincidunt=in&ante=hac&vel=habitasse&ipsum=platea&praesent=dictumst&blandit=etiam&lacinia=faucibus&erat=cursus&vestibulum=urna&sed=ut&magna=tellus&at=nulla&nunc=ut&commodo=erat&placerat=id&praesent=mauris&blandit=vulputate&nam=elementum&nulla=nullam&integer=varius&pede=nulla&justo=facilisi&lacinia=cras&eget=non&tincidunt=velit&eget=nec&tempus=nisi&vel=vulputate&pede=nonummy&morbi=maecenas&porttitor=tincidunt&lorem=lacus&id=at&ligula=velit&suspendisse=vivamus&ornare=vel&consequat=nulla&lectus=eget&in=eros&est=elementum&risus=pellentesque&auctor=quisque&sed=porta&tristique=volutpat&in=erat&tempus=quisque&sit=erat&amet=eros&sem=viverra&fusce=eget&consequat=congue&nulla=eget&nisl=semper&nunc=rutrum&nisl=nulla&duis=nunc&bibendum=purus&felis=phasellus&sed=in&interdum=felis&venenatis=donec&turpis=semper&enim=sapien',
    tags: 'Horror|Thriller',
  },
  {
    id: '16a6ef7c-9df4-4d93-a03b-d370bff74237',
    title: 'Gross Anatomy (a.k.a. A Cut Above)',
    year: 1996,
    cover: 'http://dummyimage.com/105x181.png/ff4444/ffffff',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    duration: 1933,
    contentRating: 'PG',
    source:
      'http://bravesites.com/natoque/penatibus/et/magnis/dis/parturient.xml?sollicitudin=lectus&mi=pellentesque&sit=at&amet=nulla&lobortis=suspendisse&sapien=potenti&sapien=cras&non=in&mi=purus&integer=eu&ac=magna&neque=vulputate&duis=luctus&bibendum=cum&morbi=sociis&non=natoque&quam=penatibus&nec=et&dui=magnis&luctus=dis&rutrum=parturient&nulla=montes&tellus=nascetur&in=ridiculus&sagittis=mus&dui=vivamus&vel=vestibulum&nisl=sagittis&duis=sapien&ac=cum&nibh=sociis&fusce=natoque&lacus=penatibus&purus=et&aliquet=magnis&at=dis&feugiat=parturient&non=montes&pretium=nascetur&quis=ridiculus&lectus=mus&suspendisse=etiam&potenti=vel&in=augue&eleifend=vestibulum&quam=rutrum',
    tags: 'Comedy|Drama',
  },
  {
    id: '63d700eb-3413-47fe-8790-943c15822cab',
    title: 'Tyson',
    year: 1997,
    cover: 'http://dummyimage.com/102x132.png/cc0000/ffffff',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    duration: 1902,
    contentRating: 'G',
    source:
      'http://istockphoto.com/augue/a/suscipit/nulla/elit/ac/nulla.xml?nullam=erat&orci=eros&pede=viverra&venenatis=eget&non=congue&sodales=eget&sed=semper&tincidunt=rutrum&eu=nulla&felis=nunc&fusce=purus&posuere=phasellus&felis=in&sed=felis&lacus=donec&morbi=semper&sem=sapien&mauris=a&laoreet=libero&ut=nam&rhoncus=dui&aliquet=proin&pulvinar=leo&sed=odio&nisl=porttitor&nunc=id&rhoncus=consequat&dui=in&vel=consequat&sem=ut&sed=nulla&sagittis=sed&nam=accumsan&congue=felis&risus=ut&semper=at&porta=dolor&volutpat=quis&quam=odio&pede=consequat&lobortis=varius&ligula=integer&sit=ac&amet=leo&eleifend=pellentesque&pede=ultrices&libero=mattis&quis=odio&orci=donec&nullam=vitae&molestie=nisi&nibh=nam&in=ultrices&lectus=libero&pellentesque=non&at=mattis&nulla=pulvinar&suspendisse=nulla&potenti=pede&cras=ullamcorper&in=augue&purus=a&eu=suscipit&magna=nulla&vulputate=elit&luctus=ac&cum=nulla&sociis=sed&natoque=vel&penatibus=enim&et=sit&magnis=amet&dis=nunc&parturient=viverra&montes=dapibus&nascetur=nulla&ridiculus=suscipit&mus=ligula&vivamus=in&vestibulum=lacus&sagittis=curabitur&sapien=at&cum=ipsum&sociis=ac',
    tags: 'Drama',
  },
  {
    id: '5a78d01e-f40b-4fec-86d0-5156581cac85',
    title: 'Into Eternity',
    year: 1997,
    cover: 'http://dummyimage.com/133x234.png/5fa2dd/ffffff',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 1976,
    contentRating: 'G',
    source:
      'http://indiatimes.com/enim/lorem/ipsum/dolor.jpg?et=quam&ultrices=suspendisse&posuere=potenti&cubilia=nullam',
    tags: 'Documentary',
  },
  {
    id: '0dac98d1-3138-4b38-a7d2-65b738c6d89e',
    title: 'In the Winter Dark',
    year: 2010,
    cover: 'http://dummyimage.com/142x163.png/5fa2dd/ffffff',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    duration: 1949,
    contentRating: 'G',
    source:
      'http://fotki.com/sociis/natoque/penatibus/et.xml?gravida=mauris&nisi=lacinia&at=sapien&nibh=quis&in=libero&hac=nullam&habitasse=sit&platea=amet&dictumst=turpis&aliquam=elementum&augue=ligula&quam=vehicula&sollicitudin=consequat&vitae=morbi&consectetuer=a&eget=ipsum&rutrum=integer&at=a&lorem=nibh&integer=in&tincidunt=quis&ante=justo&vel=maecenas&ipsum=rhoncus&praesent=aliquam&blandit=lacus&lacinia=morbi&erat=quis&vestibulum=tortor&sed=id&magna=nulla&at=ultrices&nunc=aliquet&commodo=maecenas&placerat=leo&praesent=odio&blandit=condimentum&nam=id&nulla=luctus&integer=nec&pede=molestie&justo=sed&lacinia=justo&eget=pellentesque&tincidunt=viverra&eget=pede&tempus=ac&vel=diam&pede=cras&morbi=pellentesque&porttitor=volutpat&lorem=dui&id=maecenas&ligula=tristique&suspendisse=est&ornare=et&consequat=tempus&lectus=semper&in=est&est=quam&risus=pharetra&auctor=magna&sed=ac&tristique=consequat',
    tags: 'Drama',
  },
  {
    id: '63928a1f-4d45-4704-8472-e6b8fc873166',
    title: 'Short Time',
    year: 1996,
    cover: 'http://dummyimage.com/236x106.png/dddddd/000000',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    duration: 1894,
    contentRating: 'PG-13',
    source:
      'http://trellian.com/odio.xml?eget=sit&congue=amet&eget=diam&semper=in&rutrum=magna&nulla=bibendum&nunc=imperdiet&purus=nullam&phasellus=orci&in=pede&felis=venenatis&donec=non&semper=sodales&sapien=sed&a=tincidunt&libero=eu&nam=felis&dui=fusce&proin=posuere&leo=felis&odio=sed&porttitor=lacus&id=morbi&consequat=sem&in=mauris&consequat=laoreet&ut=ut&nulla=rhoncus&sed=aliquet&accumsan=pulvinar&felis=sed&ut=nisl&at=nunc&dolor=rhoncus&quis=dui&odio=vel&consequat=sem&varius=sed&integer=sagittis&ac=nam&leo=congue&pellentesque=risus&ultrices=semper&mattis=porta&odio=volutpat&donec=quam&vitae=pede&nisi=lobortis&nam=ligula&ultrices=sit&libero=amet&non=eleifend&mattis=pede&pulvinar=libero&nulla=quis&pede=orci&ullamcorper=nullam&augue=molestie&a=nibh&suscipit=in&nulla=lectus&elit=pellentesque&ac=at&nulla=nulla&sed=suspendisse&vel=potenti&enim=cras&sit=in&amet=purus&nunc=eu&viverra=magna&dapibus=vulputate&nulla=luctus&suscipit=cum&ligula=sociis&in=natoque&lacus=penatibus&curabitur=et&at=magnis&ipsum=dis',
    tags: 'Comedy',
  },
];

module.exports = { moviesMock }