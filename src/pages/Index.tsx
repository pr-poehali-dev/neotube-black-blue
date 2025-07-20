import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const trendingVideos = [
    {
      id: 1,
      title: "Как создать свой первый канал",
      views: "1.2M",
      duration: "12:34",
      author: "TechGuru",
      thumbnail: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=225&fit=crop"
    },
    {
      id: 2,
      title: "Топ 10 трендов в технологиях 2024",
      views: "890K",
      duration: "8:15",
      author: "FutureTech",
      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=225&fit=crop"
    },
    {
      id: 3,
      title: "Секреты успешного видеоблога",
      views: "2.1M",
      duration: "15:42",
      author: "ContentMaster",
      thumbnail: "https://images.unsplash.com/photo-1587691592099-24045742c181?w=400&h=225&fit=crop"
    },
    {
      id: 4,
      title: "Живой стрим: Обзор новинок",
      views: "456K",
      duration: "LIVE",
      author: "StreamKing",
      thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=225&fit=crop"
    }
  ];

  const categories = [
    { name: "Технологии", count: "1.2K", color: "bg-blue-600" },
    { name: "Игры", count: "890", color: "bg-purple-600" },
    { name: "Образование", count: "2.1K", color: "bg-green-600" },
    { name: "Развлечения", count: "3.4K", color: "bg-red-600" },
    { name: "Музыка", count: "1.8K", color: "bg-yellow-600" },
    { name: "Спорт", count: "967", color: "bg-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-md border-b border-blue-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Icon name="Zap" className="w-8 h-8 text-blue-400" />
                <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full"></div>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                NeoTube
              </h1>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Input
                  placeholder="Поиск видео..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 pr-12"
                />
                <Button size="sm" className="absolute right-1 top-1 bg-blue-600 hover:bg-blue-700">
                  <Icon name="Search" className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                <Icon name="Upload" className="w-5 h-5 mr-2" />
                Загрузить
              </Button>
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                <Icon name="Bell" className="w-5 h-5" />
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>Ю</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar & Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-black/40 backdrop-blur-sm h-screen sticky top-16 p-4">
          <nav className="space-y-2">
            {[
              { icon: "Home", label: "Главная", active: true },
              { icon: "TrendingUp", label: "В тренде" },
              { icon: "Users", label: "Подписки" },
              { icon: "Clock", label: "История" },
              { icon: "Heart", label: "Избранное" },
              { icon: "Settings", label: "Настройки" }
            ].map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className={`w-full justify-start ${
                  item.active 
                    ? 'bg-blue-600/20 text-blue-400 border-r-2 border-blue-400' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <Icon name={item.icon as any} className="w-5 h-5 mr-3" />
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Categories */}
          <div className="mt-8">
            <h3 className="text-gray-400 text-sm font-semibold mb-4 uppercase tracking-wider">
              Категории
            </h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/30 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                    <span className="text-gray-300 text-sm">{category.name}</span>
                  </div>
                  <Badge variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs">
                    {category.count}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Hero Section */}
          <div className="relative mb-8 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 p-8">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Добро пожаловать в NeoTube
              </h2>
              <p className="text-blue-100 text-lg mb-6 max-w-2xl">
                Современная платформа для создателей контента. Загружайте, смотрите и делитесь видео с миллионами пользователей.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Icon name="Play" className="w-5 h-5 mr-2" />
                  Начать просмотр
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Icon name="Upload" className="w-5 h-5 mr-2" />
                  Загрузить видео
                </Button>
              </div>
            </div>
            <div className="absolute top-4 right-4 opacity-20">
              <Icon name="Zap" className="w-32 h-32 text-white" />
            </div>
          </div>

          {/* Trending Videos */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <Icon name="TrendingUp" className="w-6 h-6 mr-3 text-blue-400" />
                В тренде
              </h3>
              <Button variant="ghost" className="text-blue-400 hover:text-blue-300">
                Показать все
                <Icon name="ChevronRight" className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingVideos.map((video) => (
                <Card key={video.id} className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-t-lg flex items-center justify-center">
                      <Icon name="Play" className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <CardTitle className="text-white text-sm mb-2 line-clamp-2">
                      {video.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-xs">
                      {video.author} • {video.views} просмотров
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
              <CardContent className="p-6 text-center">
                <Icon name="Users" className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">10M+</h4>
                <p className="text-gray-300">Активных пользователей</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30">
              <CardContent className="p-6 text-center">
                <Icon name="Video" className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">1B+</h4>
                <p className="text-gray-300">Видео загружено</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30">
              <CardContent className="p-6 text-center">
                <Icon name="Clock" className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">500M+</h4>
                <p className="text-gray-300">Часов просмотрено</p>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-sm border-t border-gray-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Zap" className="w-6 h-6 text-blue-400" />
              <span className="text-gray-300">© 2024 NeoTube. Все права защищены.</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Условия использования
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Поддержка
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;