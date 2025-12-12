import { ArrowLeft, Heart, MessageCircle, Share2, MoreVertical, Plus } from 'lucide-react';
import { Screen } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface FeedScreenProps {
  onNavigate: (screen: Screen) => void;
  onUserClick: (userName: string) => void;
}

interface Comment {
  id: number;
  author: string;
  content: string;
  time: string;
}

export function FeedScreen({ onNavigate, onUserClick }: FeedScreenProps) {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [newPostContent, setNewPostContent] = useState('');
  const [showComments, setShowComments] = useState<number | null>(null);
  const [newComment, setNewComment] = useState('');
  const [postComments, setPostComments] = useState<{ [key: number]: Comment[] }>({
    1: [
      { id: 1, author: 'Sarah Mitchell', content: 'Amazing achievement! 🎉', time: '1h ago' },
      { id: 2, author: 'David Chen', content: 'Well done! Keep it up!', time: '30m ago' },
    ],
    2: [
      { id: 1, author: 'Emma Thompson', content: 'Thanks for the reminder!', time: '4h ago' },
    ],
  });
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      time: '2h ago',
      content: 'Just completed my first 5km open water swim! The conditions were perfect today. Thank you to my buddy Sarah for keeping me motivated! 🏊‍♀️💪',
      image: 'https://images.unsplash.com/photo-1619707284867-922f30e176e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwd2F0ZXIlMjBzd2ltbWluZyUyMG9jZWFufGVufDF8fHx8MTc2NDY4NjMwNnww&ixlib=rb-4.1.0&q=80&w=1080',
      likes: 24,
      comments: 8,
      liked: false,
    },
    {
      id: 2,
      author: 'David Chen',
      avatar: 'https://images.unsplash.com/photo-1677170273559-165d576b7c18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMGluc3RydWN0b3IlMjBjb2FjaHxlbnwxfHx8fDE3NjQ2ODYzMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      time: '5h ago',
      content: 'Reminder: Always check the weather conditions before heading out. Water temp was 16°C this morning - perfect wetsuit weather!',
      image: null,
      likes: 45,
      comments: 12,
      liked: true,
    },
    {
      id: 3,
      author: 'Sarah Mitchell',
      avatar: 'https://images.unsplash.com/photo-1763713518951-758e184992f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdCUyMG1lbnRvcnxlbnwxfHx8fDE3NjQ2ODYzMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      time: '1d ago',
      content: 'Organizing a group swim this Saturday at Brighton Beach. Beginners welcome! DM me if you want to join. 🌊',
      image: null,
      likes: 67,
      comments: 23,
      liked: false,
    },
  ]);

  const toggleLike = (postId: number) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const createPost = () => {
    if (newPostContent.trim()) {
      const newPost = {
        id: posts.length + 1,
        author: 'You',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400',
        time: 'Just now',
        content: newPostContent,
        image: null,
        likes: 0,
        comments: 0,
        liked: false,
      };
      setPosts([newPost, ...posts]);
      setNewPostContent('');
      setShowCreatePost(false);
    }
  };

  const addComment = (postId: number) => {
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: (postComments[postId]?.length || 0) + 1,
        author: 'You',
        content: newComment,
        time: 'Just now',
      };
      setPostComments({
        ...postComments,
        [postId]: [...(postComments[postId] || []), newCommentObj],
      });
      setPosts(posts.map(post =>
        post.id === postId
          ? { ...post, comments: post.comments + 1 }
          : post
      ));
      setNewComment('');
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-50 h-full">
      {/* Posts */}
      <div className="flex-1 overflow-y-auto">
        {/* Create Post */}
        <div className="bg-white border-b border-gray-200 p-4">
          {!showCreatePost ? (
            <button 
              onClick={() => setShowCreatePost(true)}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl py-3 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <Plus size={20} />
              <span>Share your swim experience</span>
            </button>
          ) : (
            <div className="space-y-3">
              <textarea
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder="Share your swim experience..."
                className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows={4}
              />
              <div className="flex gap-2">
                <button
                  onClick={createPost}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl py-2 hover:from-blue-600 hover:to-blue-700 transition-all"
                >
                  Post
                </button>
                <button
                  onClick={() => {
                    setShowCreatePost(false);
                    setNewPostContent('');
                  }}
                  className="flex-1 bg-gray-200 text-gray-700 rounded-xl py-2 hover:bg-gray-300 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Posts List */}
        {posts.map((post) => (
          <div key={post.id} className="bg-white border-b border-gray-200 mb-2">
            {/* Post Header */}
            <div className="flex items-center justify-between p-4">
              <button 
                onClick={() => post.author !== 'You' && onUserClick(post.author)}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-200 to-cyan-200">
                  <ImageWithFallback
                    src={post.avatar}
                    alt={post.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-gray-900">{post.author}</div>
                  <div className="text-gray-500">{post.time}</div>
                </div>
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical size={20} />
              </button>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-3">
              <p className="text-gray-800">{post.content}</p>
            </div>

            {/* Post Image */}
            {post.image && (
              <div className="w-full aspect-video bg-gray-100">
                <ImageWithFallback
                  src={post.image}
                  alt="Post image"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Post Actions */}
            <div className="flex items-center justify-around p-4 border-t border-gray-100">
              <button
                onClick={() => toggleLike(post.id)}
                className={`flex items-center gap-2 transition-colors ${post.liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                  }`}
              >
                <Heart size={20} fill={post.liked ? 'currentColor' : 'none'} />
                <span>{post.likes}</span>
              </button>

              <button 
                onClick={() => setShowComments(showComments === post.id ? null : post.id)}
                className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors"
              >
                <MessageCircle size={20} />
                <span>{post.comments}</span>
              </button>
            </div>

            {/* Comment Section */}
            {showComments === post.id && (
              <div className="px-4 pb-4 border-t border-gray-100">
                {/* Existing Comments */}
                {postComments[post.id] && postComments[post.id].length > 0 && (
                  <div className="space-y-3 mt-3 mb-3">
                    {postComments[post.id].map((comment) => (
                      <div key={comment.id} className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="bg-gray-100 rounded-2xl px-3 py-2">
                            <div className="text-gray-900 font-medium text-sm">{comment.author}</div>
                            <div className="text-gray-800">{comment.content}</div>
                          </div>
                          <div className="text-gray-500 text-xs mt-1 ml-3">{comment.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {/* Add Comment */}
                <div className="flex gap-2 mt-3">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        addComment(post.id);
                      }
                    }}
                    placeholder="Write a comment..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => addComment(post.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-all"
                  >
                    Send
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}