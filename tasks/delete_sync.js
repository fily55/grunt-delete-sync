module.exports = function(grunt) {

  grunt.registerMultiTask('delete_sync', 'Synchronize file deletion between two directories.', function() {
    var options = this.options();
    
    this.files.map(function(file) {
      file.src.map(function (val) {
        var targetFileName = file.cwd + '/' + val,
          fileDir;
          
        if (grunt.file.isFile(targetFileName)) {
          fileDir = 'file';
        } else if (grunt.file.isDir(targetFileName)) {
          fileDir = 'dir';
        }
          
        if(fileDir && !grunt.file.exists(file.syncWith + '/' + val)) {
          grunt.log.writeln('Deleting '+fileDir+' ---> ' + targetFileName);
          grunt.file.delete(targetFileName, options);
        }
      });
    });
    
  });
};
