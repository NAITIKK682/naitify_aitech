const Contact = require('../models/Contact');

// @desc    Submit contact form (public)
// @route   POST /api/contact
// @access  Public
exports.submitContact = async (req, res, next) => {
  try {
    const { firstName, lastName, email, phone, message, subject } = req.body;
    const contact = await Contact.create({
      name: `${firstName} ${lastName}`.trim(),
      email,
      phone,
      subject,
      message
    });
    res.status(201).json({ success: true, data: contact });
  } catch (err) {
    next(err);
  }
};

// @desc    Submit enhanced contact form (with attachments)
// @route   POST /api/contact/enhanced
// @access  Private
exports.submitEnhancedContact = async (req, res, next) => {
  try {
    const { subject, message, priority } = req.body;
    
    // Handle file uploads (assuming you have multer middleware configured)
    const attachments = req.files ? req.files.map(file => ({
      filename: file.originalname,
      path: file.path,
      mimetype: file.mimetype
    })) : [];

    const contact = await Contact.create({
      userId: req.user._id, // From auth middleware
      userName: req.user.name,
      userEmail: req.user.email,
      subject,
      message,
      priority,
      attachments,
      status: 'new',
      isEnhanced: true
    });

    // You might want to send email notifications for urgent priority
    if (priority === 'urgent') {
      // TODO: Implement urgent notification logic
    }

    res.status(201).json({ success: true, data: contact });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all contact submissions
// @route   GET /api/contact
// @access  Private/Admin
exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort('-createdAt');
    res.status(200).json({ success: true, data: contacts });
  } catch (err) {
    next(err);
  }
};

// @desc    Get user's contact history
// @route   GET /api/contact/history
// @access  Private
exports.getUserContactHistory = async (req, res, next) => {
  try {
    const contacts = await Contact.find({ userId: req.user._id }).sort('-createdAt');
    res.status(200).json({ success: true, data: contacts });
  } catch (err) {
    next(err);
  }
};

// @desc    Update contact status
// @route   PATCH /api/contact/:id/status
// @access  Private/Admin
exports.updateContactStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }

    res.status(200).json({ success: true, data: contact });
  } catch (err) {
    next(err);
  }
};