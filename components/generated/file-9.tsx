"use client";

// Beispiel für die Integration von Drag-and-Drop in einer Kalenderansicht
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Innerhalb der Kalenderansicht
<DragDropContext onDragEnd={handleOnDragEnd}>
  <Droppable droppableId="events">
    {(provided) => (
      <div {...provided.droppableProps} ref={provided.innerRef}>
        {events.map((event, index) => (
          <Draggable key={event.id} draggableId={event.id.toString()} index={index}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                {event.title}
              </div>
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
</DragDropContext>