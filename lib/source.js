// Generated by CoffeeScript 1.3.3
(function() {
  var Block, Inline, Large_heading, Line_break, Object, Paragraph, Textarea, heading, story, story_description,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Object = (function() {

    function Object() {}

    return Object;

  })();

  Block = (function(_super) {

    __extends(Block, _super);

    function Block() {
      return Block.__super__.constructor.apply(this, arguments);
    }

    Block.tag = false;

    Block.content = false;

    Block.prototype.render = function(content, tag) {
      var closing_tag, opening_tag;
      this.content = content;
      this.tag = tag;
      opening_tag = "<" + this.tag + ">";
      document.write(opening_tag);
      document.write(content);
      closing_tag = "</" + this.tag + ">";
      return document.write(closing_tag);
    };

    return Block;

  })(Object);

  Inline = (function(_super) {

    __extends(Inline, _super);

    function Inline() {
      return Inline.__super__.constructor.apply(this, arguments);
    }

    Inline.tag = false;

    Inline.prototype.render = function(tag) {
      tag = "<" + tag + "/>";
      return document.write(tag);
    };

    return Inline;

  })(Object);

  Textarea = (function(_super) {

    __extends(Textarea, _super);

    function Textarea(content) {
      if (content == null) {
        content = "";
      }
      this.render(content, "textarea");
    }

    return Textarea;

  })(Block);

  Paragraph = (function(_super) {

    __extends(Paragraph, _super);

    function Paragraph(content) {
      if (content == null) {
        content = "";
      }
      this.render(content, "p");
    }

    return Paragraph;

  })(Block);

  Large_heading = (function(_super) {

    __extends(Large_heading, _super);

    function Large_heading(content) {
      if (content == null) {
        content = "";
      }
      this.render(content, "h1");
    }

    return Large_heading;

  })(Block);

  Line_break = (function(_super) {

    __extends(Line_break, _super);

    function Line_break() {
      return Line_break.__super__.constructor.apply(this, arguments);
    }

    return Line_break;

  })(Inline);

  /*
  BEGIN DOCUMENT
  */


  heading = new Large_heading("New Web Example");

  story_description = new Paragraph("Welcome to an example!  Write a story in the box below.");

  new Line_break;

  story = new Textarea;

}).call(this);