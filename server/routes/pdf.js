const PDFDocument = require('pdfkit');
const fs = require('fs');
const router = require('express').Router();
const Section1 = require('../models/section1');


router.get('/:mongoid', async (req, res) => {

      try {
        let pdfDoc = new PDFDocument;
        pdfDoc.pipe(fs.createWriteStream('SampleDocument.pdf'));
        data = await Section1.findOne({
          mongoid: req.params.mongoid
        }).exec();
        pdfDoc.fontSize(25).text('Heading', {
          height: 400,
          align: 'center'
        });
        data.keys.map(key,index => {
          pdfDoc.font('Times-Roman', 13).text(`${key}: ${data.key}`, {
            height: 100,
            width: 200,
            align: 'left'
          });
        });



          pdfDoc.end(); res.status(200).send("Pdf generated");
        }
        catch (err) {
          res.status(400).json({
            message: err
          });
        }

      });

    module.exports = router;