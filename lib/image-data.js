const photos = [
    {
        id: "94a7e01b-8576-4d18-8b84-6ae588db02d9",
        title: "The Beautiful Nature with Mountain",
        url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
        tags: ["nature", "animals", "mountain"],
        views: "10M",
        share: "4.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=53",
            name: "Alex B",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 220
        },
        likes: 100
    },
    {
        id: "de05d078-6f6d-4272-a08f-5a805a23aba4",
        title: "Photo of Pine Trees",
        url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww",
        tags: ["mist", "forest", "nature"],
        views: "10M",
        share: "4.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=54",
            name: "Brian Xelo",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 220
        },
        likes: 100
    },
    {
        "id": "8265198d-e2e1-4221-addc-8244f39fdd62",
        "title": "Serene River Flow",
        "url": "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        "tags": ["nature", "river", "serene"],
        "views": "10M",
        "share": "4.56M",
        "uploaded": "2024-01-31",
        "author": {
            "avatar": "https://i.pravatar.cc/150?img=55",
            "name": "Ceza Des",
            "bio": "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            "followers": 220
        },
        "likes": 100
    },
    {
        "id": "6cf6c10d-8ba8-46d7-b246-0e1fd5e270df",
        "title": "Ocean Horizon",
        "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
        "tags": ["nature", "ocean", "horizon"],
        "views": "10M",
        "share": "4.56M",
        "uploaded": "2024-01-31",
        "author": {
            "avatar": "https://i.pravatar.cc/150?img=56",
            "name": "Karim Bulletin",
            "bio": "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            "followers": 220
        },
        "likes": 100
    },
    {
        "id": "a7f14fb2-9b2d-43bb-98af-6c70158e9c55",
        "title": "Flower in Bloom",
        "url": "https://images.unsplash.com/photo-1697542943064-4e285245cb54?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2VyJTIwaW4lMjBibG9vbXxlbnwwfHwwfHx8MA%3D%3D",
        "tags": ["nature", "flower", "bloom"],
        "views": "6M",
        "share": "2.56M",
        "uploaded": "2024-01-31",
        "author": {
            "avatar": "https://i.pravatar.cc/150?img=57",
            "name": "Madan PA",
            "bio": "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            "followers": 120
        },
        "likes": 80
    },
    {
        "id": "6bea51c4-1123-425f-90c9-9148724872e5",
        "title": "Forest Pathway",
        "url": "https://plus.unsplash.com/premium_photo-1664547606956-22749d0e0d77?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        "tags": ["nature", "forest", "pathway"],
        "views": "10M",
        "share": "4.56M",
        "uploaded": "2024-01-31",
        "author": {
            "avatar": "https://i.pravatar.cc/150?img=58",
            "name": "Moina Lam",
            "bio": "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            "followers": 220
        },
        "likes": 100
    },
    {
        "id": "02983ddd-338d-4382-b0c8-316caa21b4a5",
        "title": "Mountain Majesty",
        "url": "https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
        "tags": ["nature", "mountain", "majesty"],
        "views": "10M",
        "share": "4.56M",
        "uploaded": "2024-01-31",
        "author": {
            "avatar": "https://i.pravatar.cc/150?img=59",
            "name": "Nat B",
            "bio": "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            "followers": 220
        },
        "likes": 100
    },
    {
        "id": "552f7d8d-d9eb-4edc-98a9-cec20c90d90c",
        "title": "Sunset Serenity",
        "url": "https://images.unsplash.com/photo-1481988535861-271139e06469?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3Vuc2V0fGVufDB8fDB8fHww",
        "tags": ["nature", "sunset", "serenity"],
        "views": "10M",
        "share": "4.56M",
        "uploaded": "2024-01-31",
        "author": {
            "avatar": "https://i.pravatar.cc/150?img=60",
            "name": "Taral X",
            "bio": "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            "followers": 220
        },
        "likes": 100
    },
    {
        "id": "f4fab2f9-e0cf-4f15-8779-d09d9e6d59bd",
        "title": "Morning Mist",
        "url": "https://images.unsplash.com/photo-1444044205806-38f3ed106c10",
        "tags": ["nature", "mist", "morning"],
        "views": "10M",
        "share": "4.56M",
        "uploaded": "2024-01-31",
        "author": {
            "avatar": "https://i.pravatar.cc/150?img=61",
            "name": "Zhoom B",
            "bio": "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            "followers": 220
        },
        "likes": 100
    },
    {
        "id": "9761a3ea-2c2c-4b6e-a618-a6e4d26cf729",
        "title": "Lush Greenery",
        "url": "https://plus.unsplash.com/premium_photo-1721487064031-a394c7267785?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHVzaCUyMGdyZWVuZXJ5fGVufDB8fDB8fHww",
        "tags": ["nature", "greenery", "lush"],
        "views": "10M",
        "share": "4.56M",
        "uploaded": "2024-01-31",
        "author": {
            "avatar": "https://i.pravatar.cc/150?img=62",
            "name": "T Manhattan",
            "bio": "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            "followers": 220
        },
        "likes": 100
    },
    {
        "id": "154ca3f8-07ec-464f-9eac-6775ec37bba1",
        "title": "Golden Hour",
        "url": "https://images.unsplash.com/photo-1482192505345-5655af888cc4",
        "tags": ["nature", "golden hour", "sunset"],
        "views": "10M",
        "share": "4.56M",
        "uploaded": "2024-01-31",
        "author": {
            "avatar": "https://i.pravatar.cc/150?img=63",
            "name": "Abhinash Chahal",
            "bio": "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            "followers": 220
        },
        "likes": 100
    },
    {
        "id": "9e396ae7-9ae4-4fec-86e3-4fc52c73b73a",
        "title": "Riverside Calm",
        "url": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
        "tags": ["nature", "river", "calm"],
        "views": "10M",
        "share": "4.56M",
        "uploaded": "2024-01-31",
        "author": {
            "avatar": "https://i.pravatar.cc/150?img=64",
            "name": "Cyrun X",
            "bio": "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            "followers": 220
        },
        "likes": 100
    },
];

const getAllPhotos = () => {
    return photos;
}

const getPhotoById = (id) => {
    return photos.find(photo => photo.id === id);
}

export {
    getAllPhotos,
    getPhotoById,
}
