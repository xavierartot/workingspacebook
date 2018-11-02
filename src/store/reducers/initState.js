export const initStateProducts = {
  '894tuq4ut84ut8v4t8wun89g': {
    author: '0Now Designs',
    email: '0@gmail.com',
    bio: '0help me find peach',
    timestamp: 1468166872634,
    productLink: 'http://0.com',
    picture: '0moi.jpg',
    deleted: false,
    likeAuthorProduct: ['8tu4bsun805n8un48ve89', '8tu4bsun805n8un48ve00'], // collections of product liked  by author
    followerIdUser: ['8tu4bsun805n8un48ve89'],
    followingIdUser: [],
    amazonStore: 'amazon.com/stores/node/14511840011',
    collections: ['894toq4zt84uz8v4t8wunvox'],
  },
  '8tu4bsun805n8un48ve89': {
    author: '1Now Designs',
    email: '1@gmail.com',
    bio: '1help me find peach',
    timestamp: 1468166872634,
    productLink: 'http://1.com',
    picture: '1moi.jpg',
    deleted: false,
    likeAuthorProduct: ['8tu4bsun805n8un48ve00'], // collections of product liked  by author
    followerIdUser: [],
    followingIdUser: [],
    amazonStore: 'amazon.com/stores/node/14511840011',
    collections: ['894toq4at84uz8v4t8wunvox'],
  },
  '8tu4bsun805n8un48ve00': {
    author: '2Now Designs',
    email: '2@gmail.com',
    bio: '2help me find peach',
    timestamp: 1468166872635,
    productLink: 'http://2.com',
    picture: '2moi.jpg',
    deleted: false,
    likeAuthorProduct: ['8tu4bsun805n8un48ve00'], // collections of product liked  by author
    followerIdUser: [],
    followingIdUser: [],
    twitter: 'https://twitter.com/idTwitter',
    facebook: 'https://facebook.com/idTwitter',
    amazonStore: 'amazon.com/stores/node/14511840011',
    collections: ['894toq4at84uz8v4t8wunvox'],
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
    timestamp: 1468166872634, // create
    personalSite: 'http://0.com',
    amazonStore: 'http://amazon.com',
    picture: '0moi.jpg', // your picture
    deleted: false,
    likeProductId: [], // collections of product you liked
    likeAuthorId: [], // collections of authors you liked
    collection: ['894toq4zt84uz8v4t8wunxav'],
    twitter: 'https://twitter.com/idTwitter',
    facebook: 'https://facebook.com/idTwitter',
  },
  '894toq4zt84uz8v4t8wunz28': {
    id: '894toq4zt84uz8v4t8wunz28',
    author: '1Now Designs',
    email: '1@gmail.com',
    bio: '1help me find peach',
    timestamp: 1468166872634,
    personalSite: 'http://1.com',
    amazonStore: 'http://amazon.com/1',
    picture: '1moi.jpg',
    deleted: false,
    likeProduct: [], // collections of product you liked
    likeAuthor: [], // collections of authors you liked
    collection: [],
    twitter: 'https://twitter.com/idTwitter',
    facebook: 'https://facebook.com/idTwitter',
  },
  '894toq4zt84uz8v4t8wunzdd': {
    id: '894toq4zt84uz8v4t8wunzdd',
    author: '2Now Designs',
    email: '2@gmail.com',
    bio: '2help me find peach',
    timestamp: 1468166872635,
    personalSite: 'http://2.com',
    amazonStore: 'http://amazon.com/2',
    picture: '2moi.jpg',
    deleted: false,
    likeProduct: [], // collections of product you liked
    likeAuthor: [], // collections of authors you liked
    collection: [],
    twitter: 'https://twitter.com/idTwitter',
    facebook: 'https://facebook.com/idTwitter',
  },
  '894toq4zt84uz8v4t8wunxav': {
    id: '894toq4zt84uz8v4t8wunxav',
    author: '2Now Designs',
    email: 'xavierartot@gmail.com',
    bio: 'Write something about yourself',
    timestamp: 1468166872635,
    personalSite: 'http://3.com',
    amazonStore: 'http://amazon.com/3',
    picture: 'images/picture.jpg',
    deleted: false,
    likeProduct: [], // collections of product you liked
    likeAuthor: [], // collections of authors you liked
    collection: [],
    twitter: 'https://twitter.com/idTwitter',
    facebook: 'https://facebook.com/idTwitter',
  },
}


export const initStateCollections = {
  '894toq4at84uz8v4t8wunvox': {
    id: '894toq4at84uz8v4t8wunvox',
    name: 'French Novel',
    path: 'french-novel',
    deleted: false,
  },
  '894toq4zt84uz8v4t8wunvox': {
    id: '894toq4zt84uz8v4t8wunvox',
    name: 'Paris novel',
    path: 'paris-novel',
    deleted: false,
  },
  '894toq4zt84uz8v4t8wuntro': {
    id: '894toq4zt84uz8v4t8wuntro',
    name: 'Paris Suspens',
    path: 'paris-suspens',
    deleted: false,
  },
  '894toq4zt84uz8v4t8wunafe': {
    id: '894toq4zt84uz8v4t8wunafe',
    name: 'Paris Mistery',
    path: 'paris-mystery',
    deleted: false,
  },
}
export const initStateAuthentification = [
  {
    id: '6810zq4zt84uz8v4t8wuntao',
    idUser: '6810zq4zt84uz8v4t8wuntao',
    connectTime: 6546464,
    deconnectTime: 9999999,
  },
]
