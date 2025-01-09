import React from 'react';
import { User, Bell, Shield, CreditCard } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Settings</h1>
      </header>

      <div className="max-w-2xl">
        <div className="bg-white rounded-xl shadow-sm divide-y">
          <div className="p-6 flex items-center gap-4">
            <User className="text-gray-400" size={24} />
            <div>
              <h3 className="font-semibold">Account Settings</h3>
              <p className="text-sm text-gray-600">Update your profile and account preferences</p>
            </div>
          </div>

          <div className="p-6 flex items-center gap-4">
            <Bell className="text-gray-400" size={24} />
            <div>
              <h3 className="font-semibold">Notifications</h3>
              <p className="text-sm text-gray-600">Choose what updates you want to receive</p>
            </div>
          </div>

          <div className="p-6 flex items-center gap-4">
            <Shield className="text-gray-400" size={24} />
            <div>
              <h3 className="font-semibold">Privacy</h3>
              <p className="text-sm text-gray-600">Manage your data and privacy preferences</p>
            </div>
          </div>

          <div className="p-6 flex items-center gap-4">
            <CreditCard className="text-gray-400" size={24} />
            <div>
              <h3 className="font-semibold">Billing</h3>
              <p className="text-sm text-gray-600">Manage your subscription and payment methods</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;