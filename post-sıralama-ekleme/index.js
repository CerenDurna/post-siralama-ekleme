const post = [
    { Author: "Çağrı Mert Bakırcı", postName: "Gen Benzerliği (Genetik Benzerlik) Nedir? İnsan Genomu, Diğer Canlılara Ne Kadar Benzer?" },
    { Author: "Hilal Badoğlu", postName: "Ormanlardaki Ağaçların Birbirleriyle Sadece İşbirliği Yapmak İçin Konuştuğu İddiası Yanıltıcıdır!" },
    { Author: "Sude Akman", postName: "Maymunlar da İnsanlar Gibi Konuşmalarını Başlatıp Bitirmek İçin Özel İfadeler Kullanıyorlar!" },
];

const listPosts = () => {
    post.map((post) => {
        console.log(post.postName);
    })
};

const addPosts = (newPost) => {
    console.log("New Posts")
    const promise1 = new Promise((resolve, reject) => {
        post.push(newPost);
        resolve(post)
        reject('bir hata oluştu')
    })
    return promise1;
}
listPosts();

async function showPosts() {
    try {
        await addPosts({ Author: "Arzu Recep", postName: "Kütleçekim Kilidi Nedir? Ay'ın Neden Hep Aynı Yüzünü Görüyoruz?" })
        listPosts();
    } catch (error) {
        console.log(error)
    }
}
showPosts();