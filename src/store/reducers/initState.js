export const initStateProducts = {
  '894tuq4ut84ut8v4t8wun89g': {
    author: '0Now Designs',
    email: '0@gmail.com',
    bio: '0help me find peach',
    timestamp: 1468166872634,
    personalLink: 'http://0.com',
    picture: '0moi.jpg',
    deleted: false,
    likeNumber: false,
    likeAuthor: ['8tu4bsun805n8un48ve89', '8tu4bsun805n8un48ve00'],
    followerId: ['8tu4bsun805n8un48ve89'],
    likesiDProduct: {},
  },
  '8tu4bsun805n8un48ve89': {
    author: '1Now Designs',
    email: '1@gmail.com',
    bio: '1help me find peach',
    timestamp: 1468166872634,
    personalLink: 'http://1.com',
    picture: '1moi.jpg',
    deleted: false,
    likeNumber: {}, // collections of product you liked
    likeAuthor: { id: '8tu4bsun805n8un48ve00' }, // collections of authors you liked
    followerId: {},
    followingId: {},
    likesiDProduct: {},
    twitter: { link: 'https://twitter.com/idTwitter' },
    facebook: { link: 'https://facebook.com/idTwitter' },
    amazonStore: 'amazon.com/stores/node/14511840011',
  },
  '8tu4bsun805n8un48ve00': {
    author: '2Now Designs',
    email: '2@gmail.com',
    bio: '2help me find peach',
    timestamp: 1468166872635,
    personalLink: 'http://2.com',
    picture: '2moi.jpg',
    deleted: false,
    likeNumber: {}, // collections of product you liked
    likeAuthor: {}, // collections of authors you liked
    followerId: {},
    followingId: {},
    likesiDProduct: {},
    twitter: { link: 'https://twitter.com/idTwitter' },
    facebook: { link: 'https://facebook.com/idTwitter' },
    amazonStore: 'amazon.com/stores/node/14511840011',
  },
}

export const initStateComments = {
  '894tuq4ut84ua8v4t8wun89g': {
    id: '894tuq4ut84ua8v4t8wun89g',
    parentId: '8tu4bsun805n8un48ve80',
    timestamp: 1468166872634,
    body: 'Hi there! I am a COMMENT.',
    author: 'thingtwo',
    voteScore: 6,
    deleted: false,
    parentDeleted: false,
  },
  '8tu4bsun805n8un48ve80': {
    id: '8tu4bsun805n8un48ve80',
    parentId: '894tuq4ut84ua8v4t8wun89g',
    timestamp: 1469479767190,
    body: 'Comments. Are. Cool.',
    author: 'thingone',
    voteScore: -5,
    deleted: false,
    parentDeleted: false,
  },
  '8tu4bsun805n8un48vea0': {
    id: '8tu4bsun805n8un48vea0',
    parentId: '8tu4bsun805n8un48ve80',
    timestamp: 1469479767190,
    body: 'Comments. What it is!',
    author: 'thingone',
    voteScore: 5,
    deleted: false,
    parentDeleted: false,
  },
  '894toq4zt84ut8v4t8wun89g': {
    id: '894toq4zt84ut8v4t8wun89g',
    parentId: '894tuq4ut84ua8v4t8wun89g',
    timestamp: 1468166872331,
    body: 'Hi there! Third COMMENT.',
    author: 'Xavier',
    voteScore: 8,
    deleted: false,
    parentDeleted: false,
  },
  '894toq4zt84uz8v4t8wun52a': {
    id: '894toq4zt84uz8v4t8wun52a',
    parentId: '8tu4bsun805n8un48vea0',
    timestamp: 1468166872311,
    body: 'Four COMMENT....',
    author: 'Xavier',
    voteScore: 8,
    deleted: false,
    parentDeleted: false,
  },
}

export const initStateUsers = {
  '894toq4zt84uz8v4t8wunz2a': {
    id: '894toq4zt84uz8v4t8wunz2a',
    author: '0Now Designs',
    email: '0@gmail.com',
    bio: '0help me find peach',
    timestamp: 1468166872634,
    personalLink: 'http://0.com',
    picture: '0moi.jpg',
    deleted: false,
    likeNumber: {}, // collections of product you liked
    likeAuthor: {}, // collections of authors you liked
    collection: { id: '894toq4zt84uz8v4t8wunxav' },
  },
  '894toq4zt84uz8v4t8wunz28': {
    id: '894toq4zt84uz8v4t8wunz28',
    author: '1Now Designs',
    email: '1@gmail.com',
    bio: '1help me find peach',
    timestamp: 1468166872634,
    personalLink: 'http://1.com',
    picture: '1moi.jpg',
    deleted: false,
    likeNumber: {}, // collections of product you liked
    likeAuthor: {}, // collections of authors you liked
    collection: {},
  },
  '894toq4zt84uz8v4t8wunzdd': {
    id: '894toq4zt84uz8v4t8wunzdd',
    author: '2Now Designs',
    email: '2@gmail.com',
    bio: '2help me find peach',
    timestamp: 1468166872635,
    personalLink: 'http://2.com',
    picture: '2moi.jpg',
    deleted: false,
    likeNumber: {}, // collections of product you liked
    likeAuthor: {}, // collections of authors you liked
    collection: {},
  },
  '894toq4zt84uz8v4t8wunxav': {
    id: '894toq4zt84uz8v4t8wunxav',
    author: '2Now Designs',
    email: 'xavierartot@gmail.com',
    bio: 'Write something about yourself',
    timestamp: 1468166872635,
    personalLink: 'https://artot.net',
    picture: 'images/picture.jpg',
    deleted: false,
    likeNumber: {}, // collections of product you liked
    likeAuthor: {}, // collections of authors you liked
    collection: {},
  },
}


export const initStateCollections = {
  '894toq4zt84uz8v4t8wunxav': {
    id: '894toq4zt84uz8v4t8wunxav',
    title: 'FUNNYGIRL WOMEN\'S ONE PIECE',
    idProducts: {
      id: '8tu4bsun805n8un48ve89',
    },
  },
  '894toq4zt84uz8v4t8wunxav': {
    id: '894toq4zt84uz8v4t8wunxav',
    title: 'lorem ipsum',
    idProducts: {
      id: '894tuq4ut84ut8v4t8wun89g',
      id: '8tu4bsun805n8un48ve00',
    },
  },
}
