const assert = require('assert');
Feature('Liking Restaurants');

Scenario('showing empty liked restaurants', ({ I }) => {
    I.amOnPage('/#/like');
    I.see('Your Favorite Restaurant', '.sub-heading')
});

Scenario('liking one cafe', async({ I }) => {

    // Halaman Utama
    I.amOnPage('/');

    // Tunggu elemen card di Home Page Muncul
    I.waitForElement('.card-container');

    // Klik card tersebut
    I.click('a.title');

    // Arahkan ke halaman Detail Page
    I.amOnPage('/#/detail');

    // Simpan elemen yang ditemukan
    const firstCafe = locate('.title').first();

    // Ambil teks nya sebagai perbandingan dengan title favorite nanti.
    const firstCafeTitle = await I.grabTextFrom(firstCafe);

    // Tunggu like Button Muncul pada halaman Detail Page
    I.waitForElement('#likeButton');

    // Klik like button
    I.click('#likeButton');

    // Arahkan ke Favorite Page
    I.amOnPage('/#/like');

    // Tunggu elemen card di Favorite Page muncul
    I.waitForElement('.card-container');

    // Ambil Teks nya
    const likedCafeTitle = await I.grabTextFrom('.title');

    // Bandingkan isi teks dari firstCafeTtitle dan LikedCafeTitle
    assert.strictEqual(firstCafeTitle, likedCafeTitle);
});

Scenario('unlike one restaurant', async({ I }) => {
    // Halaman Utama
    I.amOnPage('/');

    // Tunggu elemen card di Home Page Muncul
    I.waitForElement('.card-container');

    // Klik card tersebut
    I.click('a.title');

    // Arahkan ke halaman Detail Page
    I.amOnPage('/#/detail');

    // Simpan elemen yang ditemukan
    const firstCafe = locate('.title').first();

    // Ambil teks nya sebagai perbandingan dengan title favorite nanti.
    const firstCafeTitle = await I.grabTextFrom(firstCafe);

    // Tunggu like Button Muncul pada halaman Detail Page
    I.waitForElement('#likeButton');

    // Klik like button
    I.click('#likeButton');

    // Arahkan ke Favorite Page
    I.amOnPage('/#/like');

    // Tunggu elemen card di Favorite Page muncul
    I.waitForElement('.card-container');
    // Klik card tersebut
    I.click('a.title');
    // Ambil Teks nya
    const likedCafeTitle = await I.grabTextFrom('.title');

    // Bandingkan isi teks dari firstCafeTtitle dan LikedCafeTitle
    assert.strictEqual(firstCafeTitle, likedCafeTitle);

    I.click(likedCafeTitle);

    // Tunggu like Button Muncul pada halaman Detail Page
    I.waitForElement('#likeButton');

    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.waitForElement('.sub-heading');
    I.see('Your Favorite Restaurant', '.sub-heading');
});