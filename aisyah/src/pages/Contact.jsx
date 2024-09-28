import backgroundImg from '../assets/info.jpg'; 

export default function Contact() {
  return (
    <div className="bg-blue-500 min-h-screen flex justify-center items-center" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.8)' }}>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Contact Information</h1>
        <div className="text-lg text-gray-700">
          <p className="mb-4">
            <span className="font-bold">Name:</span> Aisyah Romaito
          </p>
          <p className="mb-4">
            <span className="font-bold">Place, Date of Birth:</span> Padang Bujur, 12 October 2023
          </p>
          <p className="mb-4">
            <span className="font-bold">Training:</span> React
          </p>
          <p className="mb-4">
            <span className="font-bold">Instructor:</span> Arya Doo
          </p>
        </div>
      </div>
    </div>
  );
}
