### =====================================
Coffee-Script View Element Framework
####=====================================

# Object
class Object

# View Element
class View_element extends Object
@tag = false

### -------------------------------------
View-Element Types
####-------------------------------------

# Block
class Block extends View_element
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
class Inline extends View_element

# Build the inline
render: (tag) ->
tag = "<#{tag}/>"
document.write tag


### -------------------------------------
Block Types
####-------------------------------------
# Large Heading
class Large_heading extends Block
constructor: (content = "") ->
@render content, "h1"

# Paragraph
class Paragraph extends Block
constructor: (content = "") ->
@render content, "p"

# Textarea
class Textarea extends Block
constructor: (content = "") ->
@render content, "textarea"


### -------------------------------------
Inline Types
####-------------------------------------
# Line Break
class Line_break extends Inline


### =====================================
Begin Document
####=====================================
heading = new Large_heading "New Web Example"
story_description = new Paragraph "Welcome to an example! Write a story in the box below."
new Line_break
story = new Textarea
