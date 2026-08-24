import { useDispatch, useSelector } from 'react-redux';
import { testBackendConnection, selectApiTest } from './store/apiSlice';

function App() {
  const dispatch = useDispatch();
  const { loading, success, data, error } = useSelector(selectApiTest);

  const handleTestConnection = async () => {
    console.log(' [App] Testing backend connection...');
    
    try {
      // Dispatch the thunk and wait for result
      const result = await dispatch(testBackendConnection()).unwrap();
      
      // Log success to console
      console.log(' [App] Backend connection successful!');
      console.log(' [App] Response data:', result);
      
      // Also log the individual parts for clarity
      console.log(' [App] Status:', result.success);
      console.log(' [App] Message:', result.message);
      console.log(' [App] Data:', result.data);
      
    } catch (error) {
      // Log error to console
      console.error(' [App] Backend connection failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 max-w-md">
        {/*  StayEase Heading with Tailwind CSS */}
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
           StayEase
        </h1>
        
        <p className="text-gray-600 mb-8 text-base">
          Hotel Booking Platform - Foundation Phase
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Test Connection Button */}
          <button
            onClick={handleTestConnection}
            disabled={loading}
            className={`
              w-full py-3 px-6 rounded-lg font-medium text-white
              transition-all duration-200 text-base
              min-h-[44px] min-w-[44px]
              ${loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
              }
            `}
            aria-label="Test Backend Connection"
          >
            {loading ? 'Testing...' : '🔗 Test Backend Connection'}
          </button>

          {/* Show a small status indicator */}
          {success && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-700 text-sm font-medium">✅ Backend is connected!</p>
              <p className="text-green-600 text-xs mt-1">
                Check the console for details
              </p>
            </div>
          )}

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm font-medium">❌ Connection failed</p>
              <p className="text-red-600 text-xs mt-1">
                Check console for error details
              </p>
            </div>
          )}
        </div>

        {/* Debug info in the UI (optional, helps with testing) */}
        {import.meta.env.DEV && (
          <div className="mt-4 text-xs text-gray-400">
            <p>API URL: {import.meta.env.VITE_API_URL}</p>
            <p>Environment: {import.meta.env.MODE}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;