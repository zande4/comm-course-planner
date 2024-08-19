const C100 = new Course("100", "Communication and Social Process", false, false, false, false, false, false, false, false, false, false, "NA", "NA",
"Addresses the many ways our communication--including language, discourse, performance, and media--reflects, creates, sustains, and transforms prevailing social and cultural practices.")

let courseArray = [];

  function parseCSV(callback) {
    Papa.parse("courses.csv", {
      download: true,
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: function(results) {
        courseArray = results.data.map(row => {
          
          return new Course(
              String(row.number),
              row.name,
              row.starter,
              row['COMM Exp'],
              row['modes of inquiry'],
              row.representation,
              row.cel,
              row.mapc,
              row.mtpc,
              row.ocw,
              row.raa,
              row.newMedia,
              row.prereqs,
              row.ideas,
              row.description
          );
        });
        if (callback) callback();
      },
      error: function(error) {
        console.error("Parsing Error:", error);
      }
    });
  }