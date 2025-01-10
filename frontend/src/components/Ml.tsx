// Ml.tsx
import React, { useState } from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';
import { Camera, FileUpIcon } from 'lucide-react';

function Ml() {
  const [leftFile, setLeftFile] = useState<File | null>(null);
  const [rightFile, setRightFile] = useState<File | null>(null);
  const [leftUploaded, setLeftUploaded] = useState(false);
  const [rightUploaded, setRightUploaded] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResultsReady, setScanResultsReady] = useState(false);

  const onDrop = (
    acceptedFiles: File[], 
    setFile: React.Dispatch<React.SetStateAction<File | null>>, 
    setUploaded: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setFile(file);
      setUploaded(true);
    }
  };

  const { getRootProps: getRootPropsLeft, getInputProps: getInputPropsLeft } = useDropzone({
    onDrop: (acceptedFiles) => onDrop(acceptedFiles, setLeftFile, setLeftUploaded),
    disabled: leftUploaded,
  } as unknown as DropzoneOptions);

  const { getRootProps: getRootPropsRight, getInputProps: getInputPropsRight } = useDropzone({
    onDrop: (acceptedFiles) => onDrop(acceptedFiles, setRightFile, setRightUploaded),
    disabled: rightUploaded,
  } as unknown as DropzoneOptions);

  const startScan = () => {
    setIsScanning(true);
    setScanResultsReady(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanResultsReady(true);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-green-600 to-green-800 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white text-center">
            Image Scanner Interface
          </h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-4 relative" {...getRootPropsLeft()}>
            <input {...getInputPropsLeft() as React.InputHTMLAttributes<HTMLInputElement>} />
            <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center relative">
              {leftUploaded ? (
                <img src={URL.createObjectURL(leftFile)} alt="Left file" className="object-cover w-full h-full rounded-lg" />
              ) : (
                <FileUpIcon className="w-16 h-16 text-gray-600" />
              )}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 relative">
            <div className="aspect-square bg-gray-50 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
              {isScanning ? (
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-lg font-semibold text-gray-700">Scanning...</p>
                </div>
              ) : scanResultsReady ? (
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Tin (Aluminium)</h3>
                  <p className="text-gray-600">Carbon Tracked: 0.25-0.5 kg CO₂ per can</p>
                  <p className="text-gray-600">Carbon Reduced: 0.20-0.45 kg CO₂ saved per can</p>
                </div>
              ) : (
                <div className="text-center p-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Scan Results</h3>
                  <p className="text-gray-500">Results will appear here after scanning</p>
                </div>
              )}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 relative" {...getRootPropsRight()}>
            <input {...getInputPropsRight() as React.InputHTMLAttributes<HTMLInputElement>} />
            <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center relative">
              {rightUploaded ? (
                <img src={URL.createObjectURL(rightFile)} alt="Right file" className="object-cover w-full h-full rounded-lg" />
              ) : (
                <Camera className="w-16 h-16 text-gray-600" />
              )}
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={startScan}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            disabled={isScanning}
          >
            {isScanning ? 'Scanning...' : 'Start Scan'}
          </button>
        </div>
      </main>
    </div>
  );
}

export default Ml;
