'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

type FormData = {
    name: string;
    phone: string;
    email: string;
    message: string;
    time: string;
    agreed: boolean;
};

type FormErrors = {
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
    time?: string;
    agreed?: string;
};

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        message: '',
        time: '',
        agreed: false,
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
        } else if (
            formData.phone.length !== 10 ||
            isNaN(Number(formData.phone)) ||
            !Number.isInteger(Number(formData.phone))
        ) {
            newErrors.phone = 'Phone must be a 10-digit number';
        }

        if (!formData.email.includes('@')) {
            newErrors.email = 'Valid email is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Please share what brings you here';
        }

        if (!formData.time.trim()) {
            newErrors.time = 'Preferred time is required';
        }

        if (!formData.agreed) {
            newErrors.agreed = 'Consent is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        const isCheckbox = (e.target as HTMLInputElement).type === 'checkbox';
        const checked = isCheckbox ? (e.target as HTMLInputElement).checked : undefined;

        setFormData((prev) => ({
            ...prev,
            [name]: isCheckbox ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            toast.success('Form submitted successfully!');
            console.log("Form content: ", formData);
            setFormData({
                name: '',
                phone: '',
                email: '',
                message: '',
                time: '',
                agreed: false,
            });
            setErrors({});
        } else {
            toast.error('Please fix the highlighted errors.');
        }
    };

    return (
        <section id="contact" className="py-20 px-6 bg-gray-300">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                    Contact Dr. Blake
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md text-gray-800">
                    {/* Name */}
                    <div>
                        <label className="block font-medium mb-1">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="w-full border rounded px-4 py-2"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block font-medium mb-1">Phone</label>
                        <input
                            name="phone"
                            type="tel"
                            className="w-full border rounded px-4 py-2"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block font-medium mb-1">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="w-full border rounded px-4 py-2"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block font-medium mb-1">What brings you here?</label>
                        <textarea
                            name="message"
                            rows={4}
                            className="w-full border rounded px-4 py-2"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    {/* Preferred time */}
                    <div>
                        <label className="block font-medium mb-1">Preferred time to reach you</label>
                        <input
                            name="time"
                            type="text"
                            className="w-full border rounded px-4 py-2"
                            value={formData.time}
                            onChange={handleChange}
                        />
                        {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center space-x-3">
                        <input
                            name="agreed"
                            type="checkbox"
                            checked={formData.agreed}
                            onChange={handleChange}
                            className="h-4 w-4"
                        />
                        <label htmlFor="agreed" className="text-gray-700">
                            I agree to be contacted
                        </label>
                    </div>
                    {errors.agreed && <p className="text-red-500 text-sm">{errors.agreed}</p>}

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
