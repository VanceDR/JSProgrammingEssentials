var xhrNews = new XMLHttpRequest();
var url = './news_article.json';

xhrNews.open('GET', url, true);
xhrNews.responseType = 'json';
xhrNews.onload = function () {
    var newsList = xhrNews.response.news;
    var newsListDiv = document.getElementById('news');
    newsList.forEach(function(news) {
        var newsDiv = document.createElement('div');
        newsDiv.classList.add('news');
  
        var title = document.createElement('h2');
        title.textContent = news.title;
  
        var content = document.createElement('p');
        content.textContent = news.content;
  
        
        newsDiv.appendChild(title);
        newsDiv.appendChild(content);

  
        newsListDiv.appendChild(newsDiv);
      });
}

xhrNews.send();