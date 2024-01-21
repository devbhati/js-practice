var Twitter = function() {
    this.tweetMap = {};
    this.followMap = {};
    this.counter = 0;
};

Twitter.prototype.postTweet = function(userId, tweetId) {
    if(this.tweetMap[userId]?.length > 0) this.tweetMap[userId].push([tweetId, this.counter]);
    else this.tweetMap[userId] = [[tweetId, this.counter]];
    this.counter++;
};

Twitter.prototype.getNewsFeed = function(userId) {
    let listFollowed = this.followMap[userId];
    let tweets = [];
    listFollowed?.forEach(fol => {
        tweets.push(...this.tweetMap[fol]);
    })
    if(this.tweetMap?.[userId]) tweets.push(...this.tweetMap?.[userId]);
    tweets.sort((t1, t2) => t2[1] - t1[1]);
    let feed = [];
    for(let i = 0; i < Math.min(tweets.length, 10); i++) {
        feed.push(tweets[i][0]);
    }
    return feed;
};

Twitter.prototype.follow = function(followerId, followeeId) {
    if(this.followMap?.[followerId]) this.followMap[followerId].push(followeeId);
    else this.followMap[followerId] = [followeeId];
    this.followMap[followerId] = Array.from(new Set(this.followMap[followerId]));
};

Twitter.prototype.unfollow = function(followerId, followeeId) {
    this.followMap?.[followerId].forEach((element, index) => {
        if(element === followeeId) this.followMap[followerId].splice(index, 1);
    })
};



let twitter = new Twitter();
twitter.postTweet(2, 5);
twitter.follow(1, 2);
twitter.follow(1, 2);
console.log(twitter.getNewsFeed(1));