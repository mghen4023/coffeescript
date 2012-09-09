# Object
class Object

# Block
class Block extends Object
  @tag = false
  @content = false
  
  # Build the block
  render: (content, tag) ->
    @content = content
    @tag = tag
    
    opening_tag = "<#{@tag}>"
    document.write opening_tag
    
    document.write content
    
    closing_tag = "</#{@tag}>"
    document.write closing_tag
    
# Inline
class Inline extends Object
  @tag = false
  
  # Build the inline
  render: (tag) ->
    tag = "<#{tag}/>"
    document.write tag

# Textarea
class Textarea extends Block
  constructor: (content = "") ->
    @render content, "textarea"
  
# Paragraph
class Paragraph extends Block
  constructor: (content = "") ->
    @render content, "p"
    
# Large Heading
class Large_heading extends Block
  constructor: (content = "") ->
    @render content, "h1"
    
# Line Break
class Line_break extends Inline

###
BEGIN DOCUMENT
###
heading = new Large_heading "New Web Example"
story_description = new Paragraph "Welcome to an example!  Write a story in the box below."
new Line_break
story = new Textarea