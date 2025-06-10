import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Save, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import AnimatedElement from '../../components/ui/AnimatedElement';
import toast from 'react-hot-toast';
import axios from 'axios';

interface PortfolioItem {
  _id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  client: string;
  completionDate: string;
  technologies: string[];
  status: 'published' | 'draft';
  liveUrl?: string;
  githubUrl?: string;
  createdAt: string;
  updatedAt: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://gatistwam-backend.onrender.com';

const PortfolioManagement: React.FC = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<PortfolioItem>>({
    title: 'Portfolio Item',
    description: '',
    imageUrl: '',
    category: 'General',
    status: 'published'
  });
  const [newTechnology, setNewTechnology] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Portfolio Management - Gatistwam Admin';
    fetchPortfolioItems();
  }, []);

  const fetchPortfolioItems = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        toast.error('Please log in to view portfolio items');
        setIsLoading(false);
        return;
      }

      const response = await axios.get('/api/portfolio', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (Array.isArray(response.data)) {
        setPortfolioItems(response.data);
      } else {
        console.error('Invalid response format:', response.data);
        setPortfolioItems([]);
        toast.error('Invalid data format received from server');
      }
    } catch (error) {
      console.error('Error fetching portfolio items:', error);
      setPortfolioItems([]);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          toast.error('Please log in to view portfolio items');
        } else {
          toast.error(error.response?.data?.message || 'Error fetching portfolio items');
        }
      } else {
        toast.error('Error fetching portfolio items');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdd = () => {
    setIsAdding(true);
    setFormData({
      title: 'Portfolio Item',
      description: '',
      imageUrl: '',
      category: 'General',
      status: 'published'
    });
    console.log('Adding new item, form reset.');
  };

  const getImageUrl = (imageUrl: string) => {
    if (!imageUrl) return '';
    if (imageUrl.startsWith('http')) return imageUrl;
    if (imageUrl.startsWith('/uploads/')) {
      // Ensure we're using the API base URL for uploads
      const cleanPath = imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`;
      return `${API_BASE_URL}${cleanPath}`;
    }
    return imageUrl;
  };

  const handleEdit = (item: PortfolioItem) => {
    setEditingId(item._id);
    setFormData(item);
    console.log('Editing item, formData set:', item);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        const token = localStorage.getItem('adminToken');
        if (!token) {
          toast.error('Please log in to delete portfolio items');
          return;
        }

        const response = await axios.delete(`/api/portfolio/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.data) {
          toast.success('Portfolio item deleted successfully');
          setPortfolioItems(prevItems => prevItems.filter(item => item._id !== id));
          fetchPortfolioItems();
        }
      } catch (error) {
        console.error('Error deleting portfolio item:', error);
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            toast.error('Please log in to delete portfolio items');
          } else {
            toast.error(error.response?.data?.message || 'Error deleting portfolio item');
          }
        } else {
          toast.error('Error deleting portfolio item');
        }
      }
    }
  };

  const handleAddTechnology = () => {
    if (newTechnology.trim()) {
      setFormData(prev => ({
        ...prev,
        technologies: [...(prev.technologies || []), newTechnology.trim()]
      }));
      setNewTechnology('');
    }
  };

  const handleRemoveTechnology = (tech: string) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies?.filter(t => t !== tech) || []
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        toast.error('Please log in to save portfolio items');
        return;
      }

      // Validate required fields
      if (!formData.description?.trim()) {
        toast.error('Description is required');
        setIsSubmitting(false);
        return;
      }

      if (!formData.imageUrl?.trim()) {
        toast.error('Image is required');
        setIsSubmitting(false);
        return;
      }

      // Ensure all required fields are present and trim strings
      const portfolioData = {
        title: formData.title?.trim() || 'Portfolio Item',
        description: formData.description.trim(),
        category: formData.category?.trim() || 'General',
        imageUrl: formData.imageUrl.trim(),
        status: formData.status || 'published',
        technologies: formData.technologies || []
      };

      let response;

      if (editingId) {
        // Update existing item
        console.log('Updating portfolio item with ID:', editingId, portfolioData);
        response = await axios.put(`/api/portfolio/${editingId}`, portfolioData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        toast.success('Portfolio item updated successfully!');
      } else {
        // Create new item
        console.log('Creating new portfolio item:', portfolioData);
        response = await axios.post('/api/portfolio', portfolioData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        toast.success('Portfolio item created successfully!');
      }

      if (response.data) {
        // Reset form and state
        setFormData({
          title: 'Portfolio Item',
          description: '',
          imageUrl: '',
          category: 'General',
          status: 'published',
          technologies: []
        });
        setIsAdding(false);
        setEditingId(null);
        fetchPortfolioItems();
      }
    } catch (error) {
      console.error('Error saving portfolio item:', error);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          toast.error('Please log in to save portfolio items');
        } else {
          toast.error(error.response?.data?.message || 'Error saving portfolio item');
        }
      } else {
        toast.error('Error saving portfolio item');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size should be less than 5MB');
      return;
    }

    // Check file type
    if (!file.type.startsWith('image/')) {
      toast.error('Only image files are allowed');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        toast.error('Please log in to upload images');
        return;
      }

      console.log('Attempting image upload...');
      const response = await axios.post(`${API_BASE_URL}/api/portfolio/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        },
      });

      console.log('Image upload response:', response.data);

      if (response.data.success && response.data.filePath) {
        // Update the imageUrl with the full URL
        const imageUrl = `${API_BASE_URL}${response.data.filePath}`;
        setFormData(prev => ({
          ...prev,
          imageUrl: imageUrl
        }));
        toast.success('Image uploaded successfully');
        console.log('Image uploaded, imageUrl set:', imageUrl);
      } else {
        console.error('Image upload success: ', response.data.success, ' filePath: ', response.data.filePath);
        toast.error(response.data.message || 'Image upload failed');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          toast.error('Please log in to upload images');
        } else {
          toast.error(error.response?.data?.message || 'Error uploading image');
        }
      } else {
        toast.error('Error uploading image');
      }
    }
  };

  const handleUpdate = async (id: string) => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        toast.error('Please log in to update portfolio items');
        return;
      }

      const response = await axios.put(`/api/portfolio/${id}`, formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.data.success) {
        toast.success('Portfolio item updated successfully');
        setFormData({
          title: '',
          description: '',
          imageUrl: '',
          status: 'published'
        });
        setIsAdding(false);
        setEditingId(null);
        fetchPortfolioItems(); // Refresh the list
      }
    } catch (error) {
      console.error('Error updating portfolio item:', error);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          toast.error('Please log in to update portfolio items');
        } else {
          toast.error(error.response?.data?.message || 'Error updating portfolio item');
        }
      } else {
        toast.error('Error updating portfolio item');
      }
    }
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="p-6">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Portfolio Management</h1>
          <button
            onClick={handleAdd}
            className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Portfolio Item
          </button>
        </div>

        {/* Add/Edit Form */}
        {(isAdding || editingId) && (
          <AnimatedElement>
            <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {editingId ? 'Edit Portfolio Item' : 'Add New Portfolio Item'}
                </h2>
                <button
                  onClick={() => {
                    setIsAdding(false);
                    setEditingId(null);
                  }}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Image
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formData.imageUrl}
                      onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Image URL"
                      required
                      disabled={isSubmitting}
                    />
                    <label className={`px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        disabled={isSubmitting}
                      />
                      <ImageIcon className="w-5 h-5" />
                    </label>
                  </div>
                  {formData.imageUrl && (
                    <div className="mt-2">
                      {/* <img
                        src={formData.imageUrl}
                        alt="Portfolio preview"
                        className="h-32 w-32 object-cover rounded-md"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9Ijc1IiB5PSI3NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2UgRXJyb3I8L3RleHQ+PC9zdmc+';
                          toast.error('Failed to load image preview');
                        }}
                      /> */}
                       {/* Temporary comment out image preview */}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as 'published' | 'draft' })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    disabled={isSubmitting}
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="w-5 h-5 mr-2" />
                        {editingId ? 'Update Portfolio Item' : 'Save Portfolio Item'}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </AnimatedElement>
        )}

        {/* Portfolio Items List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {portfolioItems && portfolioItems.length > 0 ? (
                portfolioItems.map((item) => (
                  <tr key={item._id}>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                      {item.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        src={getImageUrl(item.imageUrl)}
                        alt={item.title}
                        className="h-16 w-16 object-cover rounded-md"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9Ijc1IiB5PSI3NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2UgRXJyb3I8L3RleHQ+PC9zdmc+';
                          console.error('Failed to load image:', item.imageUrl);
                        }}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        item.status === 'published' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300 mr-4"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                    No portfolio items found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default PortfolioManagement; 